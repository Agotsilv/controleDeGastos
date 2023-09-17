import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #031A6E;
    width: 100%;
    height: 258px;
    padding: 17px;
`

export const TextTitle = styled.Text`
   color: white;
   font-size: ${RFValue(18)}px;
   font-weight: 800;
   top: 38px;
`

export const TextSubTitle = styled.Text`
   color: white;
   font-size: ${RFValue(14)}px;
   font-weight: 400;
`

export const ContainerValue = styled.View`
 margin-top: 60px;
`

export const Amount = styled.Text`
   color: white;
   font-size: ${RFValue(32)}px;
   font-weight: 600;
   margin-top: 2px;
`

export const ContainerAmount = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ContainerButton = styled.View`
    margin-right: 10px;
`

export const ButtonInsertValue = styled.TouchableOpacity`
    background-color: rgba(255,255,255,0.4);
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 5px ;
`

export const LineView = styled.View`
    background-color: rgba(255,255,255,0.2);
    width: 100%;
    height: 2px;
    margin-top: 10px;

`

export const ContainerDespesas = styled.View`
    padding: 10px;
`

export const Despesas = styled.Text`
     color: #031A6E;
   font-size: ${RFValue(14)}px;
   font-weight: 600;
`