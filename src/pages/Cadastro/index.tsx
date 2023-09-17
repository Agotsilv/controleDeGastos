import React, { useState, useEffect } from 'react'
import { Container, TextTitle, TextSubTitle, ContainerValue, Amount,
  ContainerAmount, ContainerButton, ButtonInsertValue, LineView, ContainerDespesas, Despesas  } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Insert from 'react-native-vector-icons/Ionicons';
import ModalCadastro from './Components/Modal';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from '../../components/Cards';
import { ContainerCard } from '../Home/styles';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native';


interface DataItem {
  id: string,
  title: string,
  type: string,
  amount: number,
  data: string
}

export default function Cadastro(){
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<DataItem[]>([])
  const [refresh, setRefresh] = useState(false);
  const [soma, setSoma] = useState(0)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setRefresh(!refresh);
  };

  const getDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@Gasto:key');
      if (storedData) {
        const parsedData = JSON.parse(storedData); 
        setData(parsedData); 
      }
    } catch (error) {
      console.error('Erro ao recuperar dados do AsyncStorage:', error);
    }
  };
  useEffect(() => {
    getDataFromStorage();
  }, [refresh]);

    useEffect(() => {
      const calculateSum = () => {
        const sum = data.reduce((accumulator, item) => {
          return accumulator + item.amount;
        }, 0); // 0 is the initial value of the accumulator
        setSoma(sum);
      };
    
      calculateSum();
    }, [data])


    // useEffect(() => {
    //   AsyncStorage.removeItem('@Gasto:key');
    // })

    return(
      <>
          <Container>
            <SafeAreaView style={{ flex: 1}}>
              <TextTitle>Cadastro de Gastos</TextTitle>
              <ContainerValue>
              <TextSubTitle>Total de despesas</TextSubTitle>
                <ContainerAmount>
                  <Amount>R$ {typeof soma === 'number' ? soma.toFixed(2).replace('.', ',') : '0,00'}</Amount>

                  <ContainerButton>
                    <ButtonInsertValue onPress={toggleModal}>
                      <Insert name="add" color="white" size={30}/>
                    </ButtonInsertValue>
                  </ContainerButton>

                </ContainerAmount>
              </ContainerValue>

              <LineView/>

              <ModalCadastro
              visible={modalVisible}
              onClose={toggleModal}

            />

            </SafeAreaView>

          </Container>
          <ContainerDespesas>
            <Despesas>Despesas</Despesas>
          </ContainerDespesas>

          <ScrollView style={{ height: 900, padding: 15}}>
                {data.map((item: any, index) => (
                  <Card key={index} data={item} onUpdate={() => getDataFromStorage()} />
                ))}
              </ScrollView>
          </>
    )
}