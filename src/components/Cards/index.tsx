import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Container, ContainerIcon, TextTitle, 
TextSubTitle, LineView, ContainerAmount, Amount, Data } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface props {
  id: string,
  title: String,
  amount: string,
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
}

export default function Card ({data} : PropsData) {
  return (
    <TouchableOpacity style={{marginTop: 5}} key={data.id}>
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
          - R$ {data.amount}
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
