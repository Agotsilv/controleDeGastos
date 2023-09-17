import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 2px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ContainerIcon = styled.View`
    background: rgba(3,26,110, 0.2);
    border-radius: 10px;
    width: 60px;
    height: 60px;
    margin-left: 14px;
    align-items: center;
    justify-content: center;
`

export const TextTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 800;
    margin-left: -90px;
`
export const TextSubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #4444;
  margin-left: -90px;
`

export const LineView = styled.View`
background-color: rgba(2,2,2,0.2);
width: 100%;
height: 2px;
margin-top: 10px;

`

export const ContainerAmount = styled.View`
    justify-content: flex-start;
`

export const Amount = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.saida};
`

export const Data = styled.Text`
margin-left: 5px;
    font-size: ${RFValue(10)}px;
    font-weight: 800;
    color: #4444;
`