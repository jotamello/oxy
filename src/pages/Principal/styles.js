import { Platform } from 'react-native';
import styled from 'styled-components';

export const ContainerPrincipal = styled.View `
flex: 1;
flex-direction: row;
background-color: #000;
align-items: center;
justify-content: center;
margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'};
`;

export const ContainerWelcome = styled.View `
margin: 20px;
transform: translateX(300px);
`;

export const WelcomeButton = styled.TouchableOpacity `
transform: translateY(-270px);

`; 

export const Welcome = styled.Image `
transform: rotate(-15deg);
width: 130px;
height: 130px;

`; 

export const ContainerFeedBack = styled.View `
margin: 20px;
transform: translateX(360px);
`;

export const FeedBackButton = styled.TouchableOpacity `
transform: translateY(-200px);

`; 

export const FeedBack = styled.Image `
transform: rotate(10deg);
width: 130px;
height: 130px;

`; 

export const ContainerMatchQualificado = styled.View `
margin: 20px;
transform: translateX(-25px);
`;

export const MatchQualificadoButton = styled.TouchableOpacity `
transform: translateY(-80px);

`; 

export const MatchQualificado = styled.Image `
transform: rotate(-0deg);
width: 180px;
height: 180px;

`; 

export const ContainerMeuPerfil = styled.View `
margin: 20px;
transform: translateX(-5px);
`;

export const MeuPerfilButton = styled.TouchableOpacity `
transform: translateY(10px);

`; 

export const MeuPerfil = styled.Image `
transform: rotate(-0deg);
width: 125px;
height: 125px;

`; 

export const ContainerWishList = styled.View `
margin: 20px;
transform: translateX(-380px);
`;

export const WishListButton = styled.TouchableOpacity `
transform: translateY(100px);

`; 

export const WishList = styled.Image `
transform: rotate(-0deg);
width: 110px;
height: 110px;

`; 

ContainerFreeZone, FreeZoneButton, FreeZone

export const ContainerFreeZone = styled.View `
margin: 20px;
transform: translateX(-400px);
`;

export const FreeZoneButton = styled.TouchableOpacity `
transform: translateY(210px);

`; 

export const FreeZone = styled.Image `
transform: rotate(-0deg);
width: 120px;
height: 120px;

`; 