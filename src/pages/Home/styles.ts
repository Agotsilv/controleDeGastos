import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FlatList } from 'react-native';


export const Container = styled.SafeAreaView`
    flex: 1;
`
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0px 24px;

  margin-top: ${RFValue(50)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
  margin-left: 180px;
`;
export const User = styled.View`
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-weight: 200;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.Text_dark};
  font-size: ${RFValue(17)}px;
  font-weight: 700;
`;

export const HighlightCard = styled.View`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;


export const ContainerText = styled.View`
  margin-left: 17px;
  margin-top: -25px;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
`

export const TextRecentes = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const TextFilter = styled.Text`
  margin-right: 20px;
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

export const ContainerCard = styled.ScrollView`
padding: 15px;
`