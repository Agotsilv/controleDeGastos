
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { CardSaldo } from '../../components/CardSaldo'
import { Container, Header, HighlightCard, 
Photo, User, UserGreeting, 
UserInfo, UserName, UserWrapper, 
ContainerText, TextRecentes, ContainerCard, TextFilter} from './styles'
import Card from '../../components/Cards'
import AsyncStorage from "@react-native-async-storage/async-storage";


interface DataItem {
  id: string,
  title: string,
  type: string,
  amount: number,
  data: string
}

export default function Home(){
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc');
  const [data, setData] = useState<DataItem[]>([])
  const [subtract, setSubtract] = useState(0)

  const user = {
    id: '1',
    name: 'Tiago Oliveira',
    salario: 6420,
  }

  useEffect(() => {
      const handleData = async () => {
        const data = await AsyncStorage.getItem('@Gasto:key');
        if (data) {
          const parsedData = JSON.parse(data); 
          setData(parsedData);
        }
      }
      
      handleData()
  }, [])

  const ordenarPorAmount = (a: DataItem, b: DataItem) => {
    const amountA = a.amount;
    const amountB = b.amount;
  
    if (ordem === 'asc') {
      return amountA - amountB; // Ascending order
    } else {
      return amountB - amountA; // Descending order
    }
  };
  
  const handleFiltroClick = () => {
    setOrdem(ordem === 'asc' ? 'desc' : 'asc');
  };
  
  const cartoesOrdenados = [...data].sort(ordenarPorAmount);

  useEffect(() => {
    const Subtract = () => {
      // Calculate the subtraction by looping through the data array
      const subtractedAmount = data.reduce((accumulator, item) => {
        return accumulator - item.amount;
      }, user.salario); // Use salario as the initial value
    
      return subtractedAmount;
    };
  
    setSubtract(Subtract())
  }, [data])

  return (
		<>
			<Container>
		  <Header>
        <UserWrapper>
          <UserInfo>
            <User>
              <UserGreeting>Bem Vindo,</UserGreeting>
              <UserName>{user.name}</UserName>
            </User>
						<Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/94474189?v=4",
              }}
            />
          </UserInfo>
        </UserWrapper>
      </Header>

			<HighlightCard>
			 <CardSaldo amount={subtract} />
			</HighlightCard>

      <ContainerText>
          <TextRecentes>Transações Recentes</TextRecentes>
        <TouchableOpacity onPress={handleFiltroClick}>
          <TextFilter>Filtro</TextFilter>
        </TouchableOpacity>
      </ContainerText>

      <ContainerCard>
      {cartoesOrdenados.map((item: any) => (
          <Card key={parseInt(item.id, 10)} data={item} />
        ))}
      </ContainerCard>
		</Container>
	</>
  )
}