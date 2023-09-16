
import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { CardSaldo } from '../../components/CardSaldo'
import { Container, Header, HighlightCard, 
Photo, User, UserGreeting, 
UserInfo, UserName, UserWrapper, 
ContainerText, TextRecentes, ContainerCard, TextFilter} from './styles'
import Card from '../../components/Cards'

export default function Home(){
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc');


  const user = {
    id: '1',
    name: 'Tiago Oliveira',
    salario: '2.300,00',
  }

  const data = [
    {
      id: '1',
      title: 'Burguer King',
      type: 'alimentação',
      amount: '48,30',
      data: '15 Out 2023'
    },
    {
      id: '2',
      title: 'Uber',
      type: 'Locomoção',
      amount: '12,30',
      data: '25 Out 2019'
    },
    {
      id: '3',
      title: 'Mercado',
      type: 'alimentação',
      amount: '360,00',
      data: '20 Set 2023'
    },
    {
      id: '4',
      title: 'Padaria',
      type: 'alimentação',
      amount: '15,80',
      data: '20 Set 2023'
    },
    {
      id: '5',
      title: 'Internet',
      type: 'GastoFixo',
      amount: '100,00',
      data: '08 Out 2023'
    },
    {
      id: '6',
      title: 'Aluguel',
      type: 'GastoFixo',
      amount: '900,00',
      data: '05 Out 2023'
    },
    {
      id: '7',
      title: 'Balinha',
      type: 'alimentação',
      amount: '1,00',
      data: '05 Out 2023'
    },
  ]

  const ordenarPorAmount = (a: any, b: any) => {
    // Converta as quantidades para números (remova caracteres não numéricos)
    const valorA = parseFloat(a.amount.replace(/[^0-9.-]+/g, ''));
    const valorB = parseFloat(b.amount.replace(/[^0-9.-]+/g, ''));

    if (ordem === 'asc') {
      return valorA - valorB; // Ordem ascendente
    } else {
      return valorB - valorA; // Ordem descendente
    }
  };

  const handleFiltroClick = () => {
    setOrdem(ordem === 'asc' ? 'desc' : 'asc');
  };

  const cartoesOrdenados = [...data].sort(ordenarPorAmount); // aplico a ordenação antes de mapear
  
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
			 <CardSaldo amount={user.salario} />
			</HighlightCard>

      <ContainerText>
          <TextRecentes>Transações Recentes</TextRecentes>
        <TouchableOpacity onPress={handleFiltroClick}>
          <TextFilter>Filtro</TextFilter>
        </TouchableOpacity>
      </ContainerText>

      <ContainerCard>
      {cartoesOrdenados.map((item: any) => (
          <Card key={item.id} data={item} />
        ))}
      </ContainerCard>
		</Container>
	</>
  )
}