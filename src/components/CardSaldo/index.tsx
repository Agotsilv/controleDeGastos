import React from "react";
import { View, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Title,
  Footer,
  Amount,
} from "./style";

interface props {
  amount: number;
}

export function CardSaldo({
  amount,
}: props) {
  const formattedAmount = amount.toFixed(2).replace('.', ',');

  return (
    <View 
      style={{ flex: 1, padding: 15 }} 
    >
      <Container>
        <Header>
          <Title>Saldo restante</Title>
        </Header>

        <Footer>
        <Amount>
          R$ {typeof amount === 'number' ? amount.toFixed(2).replace('.', ',') : '0,00'}
        </Amount>
        </Footer>
      </Container>
    </View>
  );
}
