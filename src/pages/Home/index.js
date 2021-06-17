import React,{Component} from 'react';
import {ContainerHome , ContainerLogo, Logo,
         ContainerInputEmail, BoxIcon, InputEmail,
         ContainerInputPassword, InputPassword,
         ButtonLogin, ButtonLoginText,
      ContainerSemLogin, SemLogin} from './styles';

import {FontAwesome5} from '@expo/vector-icons';

export default class Home extends Component{
      constructor(props){
            super(props)
            this.state = { email: ''}
            this.state = { checkEmail: ''}
            this.state = { password: ''}
            this.state = { checkPassword: ''}
      }
      
      ConnectUser = ({navigation}) => {
            console.log('Botão Login pressionado')
            return(
                  this.props.navigation.navigate('Principal')
            )
      }
      
      render(){

            const isDontLogin = () =>{
                  console.log('Botão Não Tem Cadastro pressionado')
                  return(
                        this.props.navigation.navigate('RegisterUser')
                  )
            }

      return(
            
            <ContainerHome>

            <ContainerLogo>
                  <Logo source={require('../../assets/OXY.png')}
                  resizeMode="contain"/>
            </ContainerLogo>

            <ContainerInputEmail>
                  <BoxIcon>
                        <FontAwesome5 name="user" size={22} color='#FFF' />
                  </BoxIcon>
                  <InputEmail placeholder="digite seu e-mail!!"
                  placeholderTextColor='#999'
                  onChangeText={(email) => this.setState({email})}
                  keyboardType='email-address'
                  secureTextEntry={false}
                  textAlign='left'
                  autoCapitalize={'none'} // tudo em letra minúscula
                  value={this.state.email}
                  />
            </ContainerInputEmail>

            <ContainerInputPassword>
                  <BoxIcon>
                        <FontAwesome5 name="key" size={22} color='#FFF' />
                  </BoxIcon>
                  <InputPassword placeholder="digite sua senha!!"
                  placeholderTextColor='#999'
                  onChangeText={(password) => this.setState({password})}
                  keyboardType='email-address'
                  secureTextEntry={true}
                  textAlign='left'
                  autoCapitalize={'none'} //tudo em letra minúscula
                  value={this.state.password}
                  />
            </ContainerInputPassword >

            <ButtonLogin onPress={this.ConnectUser}>
                  <ButtonLoginText>Conectar</ButtonLoginText>
            </ButtonLogin>

            <ContainerSemLogin 
            onPress={isDontLogin } >
                  <SemLogin>Não tem cadastro? CLIQUE AQUI!!!</SemLogin>
            </ContainerSemLogin>

            </ContainerHome>
      )
}
}
