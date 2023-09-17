import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerModal = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.6);
    padding: 5px;
    justify-content: center;
`

export const ContainerBg = styled.View`
    background-color: #031A6E;
    border-radius: 5px;
    padding: 15px;
`

export const ContainerBtn = styled.View`
    flex-direction: row;
    padding: 10px;
`

export const Btn = styled.TouchableOpacity`
    padding: 10px;
    background-color: green;
    margin-right: 20px;
    border-radius: 5px;
`

export const TextBtn = styled.Text`
    color: white;
    font-size: ${RFValue(12)}px;

`