import React, {Component}from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ContainerRegisterUser, ContainerLogo, Logo, ContainerInputEmail, BoxIcon, 
      InputEmail, ContainerInputPassword, InputPassword, 
      ButtonRegister, ButtonRegisterText, ContainerComLogin, ComLogin} from './styles';
import {FontAwesome5} from '@expo/vector-icons';



export default class RegisterUser extends Component{
      constructor(props){
            super(props)
            this.state = { email: ''}
            this.state = { checkEmail: ''}
            this.state = { password: ''}
            this.state = { checkPassword: ''}
      }

      render(){

            const isHaveLogin = () =>{
                  console.log('Botão Já Tenho login pressionado')
                  return(
                        this.props.navigation.navigate('Home')
                  )
            }
      
      const checkRegister = (props) =>{


      }
      

      return(
            <ContainerRegisterUser>
            <ContainerLogo>
                  <Logo source={require('../../assets/OXY.png')}/>
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

            <ContainerInputEmail>
            <BoxIcon>
            <FontAwesome5 name="user" size={22} color='#FFF' />
            </BoxIcon>
            <InputEmail placeholder="confirme seu e-mail!!"
                  placeholderTextColor='#999'
                  onChangeText={(checkEmail) => this.setState({checkEmail})}
                  keyboardType='email-address'
                  secureTextEntry={false}
                  textAlign='left'
                  autoCapitalize={'none'} // tudo em letra minúscula
                  value={this.state.checkEmail}
                  />
            </ContainerInputEmail>
            <View>
                  <Text style={styles.separador}>____________________________________________________</Text>
                  <Text style={styles.separador}>____________________________________________________</Text>
            </View>

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

            <ContainerInputPassword>
                  <BoxIcon>
                        <FontAwesome5 name="key" size={22} color='#FFF' />
                  </BoxIcon>
                  <InputPassword placeholder="confirme sua senha!!"
                  placeholderTextColor='#999'
                  onChangeText={(checkPassword) => this.setState({checkPassword})}
                  keyboardType='email-address'
                  secureTextEntry={true}
                  textAlign='left'
                  autoCapitalize={'none'} //tudo em letra minúscula
                  value={this.state.checkPassword}
                  />
            </ContainerInputPassword >

            <ButtonRegister onPress={checkRegister}>
                  <ButtonRegisterText>Cadastrar</ButtonRegisterText>
            </ButtonRegister>

            <ContainerComLogin onPress={isHaveLogin}>
                  <ComLogin>Já tem Login??? CLIQUE AQUI.</ComLogin>
            </ContainerComLogin>
            
            </ContainerRegisterUser>
      )
}
}

const styles = StyleSheet.create({
      separador:{
            color: '#2b0600',
      }
})