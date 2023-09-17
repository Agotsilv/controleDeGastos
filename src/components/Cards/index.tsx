import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { Container, ContainerIcon, TextTitle, 
TextSubTitle, LineView, ContainerAmount, Amount, Data } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface props {
  id: string,
  title: String,
  amount: number,
  data: string,
  type: 'alimentação' | 'Locomoção' | 'GastoFixo'
}

const icon = {
  alimentação: 'fast-food-outline',
  Locomoção: 'car',
  GastoFixo: 'home',
}


interface PropsData {
  data: props;
  onUpdate?: () => void;
}

export default function Card ({data, onUpdate} : PropsData) {

  const message = async (itemId: any) => {
    Alert.alert('Atenção!', 'Deseja excluir gasto ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => removeAsync(itemId)},
    ]);
  };

  const removeAsync = async (itemId: any) => {
    try {
      const existingData = await AsyncStorage.getItem('@Gasto:key');
      const existingDataArray = existingData ? JSON.parse(existingData) : [];
      const itemIndexToRemove = existingDataArray.findIndex((item: any) => item.id === itemId);
  
      if (itemIndexToRemove !== -1) {
        existingDataArray.splice(itemIndexToRemove, 1);
        await AsyncStorage.setItem('@Gasto:key', JSON.stringify(existingDataArray));
  
        onUpdate()
      } else {
        console.log(`Item with ID '${itemId}' not found in AsyncStorage.`);
      }
    } catch (error) {
      console.error(`Error removing item with ID '${itemId}' from AsyncStorage:`, error);
    }
  }

  return (
    <TouchableOpacity style={{marginTop: 5}} key={data.id} onPress={() => message(data.id)} >
    <Container>
       <ContainerIcon>
        <Ionicons name={icon[data.type]} color="#031A6E" size={40} />
       </ContainerIcon>

       <View>
        <TextTitle>
          {data.title}
        </TextTitle>
          {data.type === 'alimentação' ? (
              <TextSubTitle>
                Alimentação
              </TextSubTitle>
          ) : data.type === 'Locomoção' ? (
            <TextSubTitle>
                Locomoção
              </TextSubTitle>
          ) : data.type === 'GastoFixo' ? (
            <TextSubTitle>
                Gasto Fixo
              </TextSubTitle>
          ) : null}
           
       </View>

        <ContainerAmount>
        <Amount>
          - R$ {typeof data.amount === 'number' ? data.amount.toFixed(2).replace('.', ',') : '0,00'}
        </Amount>
          <Data>
          {data.data}
          </Data>
        </ContainerAmount>

    </Container>
       <LineView/>
    </TouchableOpacity>
  )
}
