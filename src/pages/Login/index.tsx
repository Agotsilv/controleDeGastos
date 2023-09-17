import React, { useEffect, useState } from 'react'
import { Container, ContainerInput, ContainerBtn, Button, TextButton, TexLogo,ContainerLogo, Subtitle  } from './style'
import Input from "../../components/Input";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,TouchableOpacity } from 'react-native';

export default function Login (){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const auth = () => {
    if(email === '' || password === ''){
      alert('Por favor, preencha o email e a senha')
    }else {
      alert('Acesso permitido')
    }
  }

  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };


    return (
    <>
      <Container>
          <ContainerLogo>
          <TexLogo>Economiza</TexLogo>
          <Subtitle>Controle seus gastos de forma fácil e eficiente.</Subtitle>
          </ContainerLogo>
        <ContainerInput> 
          <Input placeholder="Email" style={{ borderWidth: 1, borderColor: '#031A6E'}} 
          value={email}
          onChangeText={(e: any) => setEmail(e)}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#031A6E' }}>
            <Input
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{ flex: 1, padding: 10 }}
            />
            <TouchableOpacity onPress={PasswordVisible} style={{ padding: 10 }}>
              <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </ContainerInput>

        <ContainerBtn>
        <Button onPress={auth}>
            <TextButton>Entrar</TextButton>
          </Button>
        </ContainerBtn>

      </Container>
    </>
    )
}