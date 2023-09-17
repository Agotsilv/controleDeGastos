import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
  background-color:${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  padding: 19px 23px;
  margin-top: -25px;
  
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -5px;
`;

export const Title = styled.Text`
  margin-top: 23px;
  font-size: ${RFValue(16)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.shape};
`;


export const Footer = styled.View``;

export const Amount = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.shape};
`;

