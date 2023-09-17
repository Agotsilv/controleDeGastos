import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
`
export const ContainerLogo = styled.View`
align-items: center;
margin-bottom: 25px;
`
export const TexLogo = styled.Text`
    font-size: ${RFValue(34)}px;
    font-weight: 800;
    color: #031A6E ;
`

export const Subtitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 600;
    color: #031A6E ;
`


export const ContainerInput = styled.View`
    width: 100%;
    padding: 10px;
`

export const ContainerBtn = styled.View`
    margin-top: 15px;
`

export const Button = styled.TouchableOpacity`
    background-color: #031A6E ;
    padding: 15px 60px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`

export const TextButton = styled.Text`
    color: white;
    font-size: ${RFValue(14)}px;
`