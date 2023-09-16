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
  amount: string;
}

export function CardSaldo({
  amount,
}: props) {
  return (
    <View 
      style={{ flex: 1, padding: 15 }} // Garanta que a imagem de fundo ocupe todo o espaço do componente
    >
      <Container>
        <Header>
          <Title>Salário</Title>
        </Header>

        <Footer>
          <Amount>R$ {amount}</Amount>
        </Footer>
      </Container>
    </View>
  );
}
