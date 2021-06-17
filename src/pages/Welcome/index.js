import React from 'react';
import {View, Text} from 'react-native';

import {ContainerLogo, Logo, ContainerWelcome, 
      ContainerAprender, AprenderText,
      ContainerVideo, VideoText,
      ContainerFaleConosco, FaleConoscoText,
        } from './styles';

export default function Welcome(){
      return(
            <ContainerWelcome>
                  <ContainerLogo>
                        <Logo source={require('../../assets/OXY.png')} resizeMode="contain"/>
                  </ContainerLogo>
                  <ContainerAprender>
                  <AprenderText>Clique para aprender sobre o App.</AprenderText>
                  </ContainerAprender>

                  <ContainerVideo>
                        <VideoText>Assistir Videos Explicativos</VideoText>
                  </ContainerVideo>

                  <ContainerFaleConosco>
                        <FaleConoscoText>Dúvidas??? Clique Aqui e Fale Conosco</FaleConoscoText>
                  </ContainerFaleConosco>

            </ContainerWelcome>
      )
}