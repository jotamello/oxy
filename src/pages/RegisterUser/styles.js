import styled from 'styled-components';
import { Platform } from 'react-native';

export const ContainerRegisterUser = styled.View `
flex: 1;
background-color: #2b0600;
`;


export const ContainerLogo = styled.View `
align-items: center;
justify-content: center;
margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'};
margin-bottom: 30px;

`;

export const Logo = styled.Image `
width: 120px;
height: 150px;
`;

export const ContainerInputEmail = styled.View `
align-items: center;
flex-direction: row;
width: 95%;
margin: 5px 0;
margin-left: 15px;
margin-right: 15px;
border-radius: 7px;
border-width: 1px;
border-color: #2b0600;
`;

export const BoxIcon = styled.View `
align-items: center;
justify-content: center;
padding-left: 10px;
width: 11%;
height: 50px;
background-color: rgba(255,255,255,0.15);
border-top-left-radius: 7px;
border-bottom-left-radius: 7px;
`;

export const InputEmail = styled.TextInput `
align-items: center;
justify-content: center;
width: 89%;
height: 50px;
padding: 10px;
background-color: rgba(255,255,255,0.15);
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
font-size: 22px;
color: #FFFDFF;
`;



export const ContainerInputPassword = styled.View `
align-items: center;
flex-direction: row;
width: 95%;
margin: 5px 0;
margin-left: 15px;
margin-right: 15px;
border-radius: 7px;
border-width: 1px;
border-color: #2b0600;
`;

export const InputPassword = styled.TextInput `
align-items: center;
justify-content: center;
width: 89%;
height: 50px;
padding: 10px;
background-color: rgba(255,255,255,0.15);
border-top-right-radius: 7px;
border-bottom-right-radius: 7px;
font-size: 22px;
color: #FFFDFF;
`;

export const ButtonRegister = styled.TouchableOpacity `
align-items: center;
justify-content: center;
height: 45px;
width: 95%;
background-color: rgba(234,109,0,0.92);
margin: 0 15px;
margin-top: 30px;
margin-bottom: 15px;
border-radius: 20px;
border-width: 1px;
border-color: #FFF;
`;

export const ButtonRegisterText = styled.Text `
align-items: center;
justify-content: center;
font-size: 22px;
color: #FFF;
`;


export const ContainerComLogin = styled.TouchableOpacity `
align-items: center;
justify-content: center;
height: 45px;
width: 95%;
background-color: #2b0600;
margin: 0 15px;
margin-top: 30px;
margin-bottom: 15px;
`;

export const ComLogin = styled.Text `
align-items: center;
justify-content: center;
font-size: 22px;
color: #ff7f50;
`;