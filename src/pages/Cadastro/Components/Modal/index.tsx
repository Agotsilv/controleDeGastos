import { Text, TouchableOpacity } from "react-native";
import { Modal,TextInput, View } from "react-native";
import { ContainerModal, ContainerBg, ContainerBtn, Btn, TextBtn } from "./style";
import Input from "../../../../components/Input";
import SelectDropdown from 'react-native-select-dropdown'
import NumberFormat from 'react-number-format';

import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface Props {
    visible: boolean;
    onClose: () => void;
  }


  interface StateData {
    title: string;
    type: string;
    amount: number;
    data: string;
  }

export default function ModalCadastro({
    visible,
    onClose
  }: Props){
    const countries = ["alimentação", "Locomoção", "Gasto Fixo"]
    const [data, setData] = useState<StateData>({
        title: '',
        type: '',
        amount: 0,
        data: '',
      });
      const [idCounter, setIdCounter] = useState(1);
      const [valor, setValor] = useState('');

    const selectType = (selectedItem: string) => {
      if(selectedItem === "alimentação"){
        setData(prevData => ({
            ...prevData,
            type: selectedItem,
        }));
      }else if(selectedItem === "Locomoção"){
        setData(prevData => ({
            ...prevData,
            type: selectedItem,
        }));
      }else if(selectedItem === "Gasto Fixo"){
        setData(prevData => ({
            ...prevData,
            type: 'GastoFixo',
        }));
      }
    }

    const handleData = async () => {
      if(data.amount === 0 || data.title === "" || data.data === "" || data.type === "") {
        Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      }else {
        try {
            const existingData = await AsyncStorage.getItem('@Gasto:key');
            const existingDataArray = existingData ? JSON.parse(existingData) : [];
      
            const newItem: any = {
              id: idCounter.toString(),
              title: data.title,
              type: data.type,
              amount: data.amount,
              data: data.data
            };
      
            const newDataArray = [...existingDataArray, newItem];
            await AsyncStorage.setItem('@Gasto:key', JSON.stringify(newDataArray));
      
            setData({
                title: '',
                type: '',
                amount: 0,
                data: '',
              });
              onClose()
          } catch (error) {
            console.error('Erro ao definir o valor no AsyncStorage:', error);
        }
      }
    }



    return (
    <Modal visible={visible} animationType="slide" transparent={true}>
    <ContainerModal>
        <ContainerBg>
            <Input placeholder="Descrição"  onChangeText={(text: string) => {
                    setData(prevData => ({
                      ...prevData,
                      title: text,
                    }));
                  }}/>
            <Input
              placeholder="Preço"
              keyboardType="numeric"
              onChangeText={(text: string) => {
                const cleanedText = text.replace(/[^0-9]/g, '');
                const parsedAmount = parseFloat(cleanedText) / 100; 
                setData((prevData) => ({
                  ...prevData,
                  amount: isNaN(parsedAmount) ? 0 : parsedAmount,
                }));
              }}
            />

            <Input placeholder="ex:25/05/2023"
                 value={data.data}
                 onChangeText={(text: string) => {
                  setData(prevData => ({
                    ...prevData,
                    data: text,
                  }));
                }}/>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    selectType(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
            />
            <ContainerBtn>
            <Btn onPress={handleData}>
                <TextBtn>Salvar</TextBtn>
            </Btn>
            <Btn onPress={onClose} style={{backgroundColor: 'red'}}>
                <TextBtn>Fechar</TextBtn>
            </Btn>
            </ContainerBtn>
        </ContainerBg>
    </ContainerModal>
    </Modal>
    )
}