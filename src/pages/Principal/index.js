import React from 'react';
import {ContainerPrincipal, ContainerWelcome, WelcomeButton, Welcome,
         ContainerFeedBack, FeedBackButton, FeedBack,
         ContainerMatchQualificado, MatchQualificadoButton, MatchQualificado,
         ContainerMeuPerfil, MeuPerfilButton, MeuPerfil,
         ContainerWishList, WishListButton, WishList,
         ContainerFreeZone, FreeZoneButton, FreeZone } from './styles';

export default function Principal({navigation}){
      return(
            <ContainerPrincipal>
                  <ContainerWelcome>
                  <WelcomeButton onPress = {() => navigation.navigate('Welcome')}>
                        <Welcome source ={require('../../assets/welcome.png')}/>
                  </WelcomeButton>
                  </ContainerWelcome>

                  <ContainerFeedBack>
                        <FeedBackButton>
                              <FeedBack source={require('../../assets/feedBack.png')}/>
                        </FeedBackButton>
                  </ContainerFeedBack>

                  <ContainerMatchQualificado>
                        <MatchQualificadoButton>
                              <MatchQualificado source={require('../../assets/matchQualificado.png')}/>
                        </MatchQualificadoButton>
                  </ContainerMatchQualificado>

                  <ContainerMeuPerfil>
                        <MeuPerfilButton>
                              <MeuPerfil source={require('../../assets/meuPerfil.png')}/>
                        </MeuPerfilButton>
                  </ContainerMeuPerfil>

                  <ContainerWishList>
                        <WishListButton>
                              <WishList source={require('../../assets/wishList.png')}/>
                        </WishListButton>
                  </ContainerWishList>
                  
                  <ContainerFreeZone>
                        <FreeZoneButton>
                              <FreeZone source={require('../../assets/freeZone.png')}/>
                        </FreeZoneButton>
                  </ContainerFreeZone>

            </ContainerPrincipal>
      )
}
