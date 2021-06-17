import { Platform } from "react-native";
import styled from "styled-components";

export const ContainerLogo = styled.View `
margin-top: 30px;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image `
width: 180px;
height: 180px;
`;

export const ContainerWelcome = styled.View `
flex: 1;
background-color: #2b0600;
`;

export const ContainerAprender = styled.TouchableOpacity `
align-items: center;
justify-content: center;
margin: 10px;
height: 30px;
border-radius: 15px;
background-color: rgba(255,255,255,0.15);
margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'};
`;

export const AprenderText = styled.Text `
font-size: 20px;
font-weight: bold;
color: #DF7800;
`;

export const ContainerVideo = styled.TouchableOpacity `
align-items: center;
justify-content: center;
margin: 10px;
height: 30px;
border-radius: 15px;
background-color: rgba(255,255,255,0.15);
margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'};
`;

export const VideoText = styled.Text `
font-size: 20px;
font-weight: bold;
color: #DF7800;
`;

export const ContainerFaleConosco = styled.TouchableOpacity `
align-items: center;
justify-content: center;
margin: 10px;
height: 30px;
border-radius: 15px;
background-color: rgba(255,255,255,0.15);
margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'};
`;

export const FaleConoscoText = styled.Text `
font-size: 20px;
font-weight: bold;
color: #DF7800;
`;