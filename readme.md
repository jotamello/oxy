EXPO NO REACT NATIVE:

- expo install expo-linear-gradient
- expo install @react-native-community/masked-view
- yarn add @react-navigation/native
- yarn add @react-navigation/stack
- yarn add @react-navigation/bottom-tabs
- yarn add @react-navigation/drawer
- yarn add styled-components
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- import 'react-native-gesture-handler';



1) Seletor de imagem -> serve para selecionar imagens e vídeos da 
biblioteca do telefone ou tirar uma foto com a câmara.
      - para instalar:
      expo install expo-image-picker

2) Compartilhando uma imagem -> 
      - instalar:
      expo install expo-sharing

3) Problemas de compartilhamento de arquivos locais na Web:
      - instalar:
      expo install anonymous-files

4) Tela inicial enquanto carrega o app está em app.json.
      para colocar o logo na tela de carregamento:
      "splash": {
      "image": "./assets/OXY.png", //lugar para carregar o logo.
      "resizeMode": "contain",
      "backgroundColor": "#2b0600" //lugar para alterar o backgroundColor

5) Instalando Bibliotecas de Navegação:
      - yarn add @react-navigation/native
      - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
      - npx pod-install ios

6) Instalando AsyncStorage:
      - expo install @react-native-async-storage/async-storage

7) Instalando vector-icons:
      - npm i @expo/vector-icons

8) instalar o apisauce para facilitar o uso da apisauce
      - yarn add apisauce

____________________________________________________________
DEPENDENCIAS:

necessário instalar o React Navigation:
consultar on-line os arquivos padrões necessários.
npm install @react-navigation/native
npx pod-install ios
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
cd ios pod install cd ..

import 'react-native-gesture-handler';

yarn add @react-native-community/async-storage

yarn add axios

- esta instalação necessita do vector-icons já instalado:
yarn add @react-navigation/material-top-tabs react-native-tab-view
yarn add @react-navigation/material-bottom-tabs react-native-paper

atenção para a instalação do vector-icons:
1) não pular nenhum dos procedimentos.
2) seguir minunciosamente as instruções do medium.com, caso contrário vai dar errado.
https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06

a) instalar:
npm install --save react-native-vector-icons

b) abrir o Xcode e ir até a pasta que tem o nome do projeto 
ex.: meuDrawer -> meuDrawer

c) criar a pasta <Fonts> como pasta de grupo
      botão direito do mouse -> new group -> Fonts
d) arrastar as fontes que você quer usar no seu projeto para a pasta Fonts criada:
      node_modules -> react-native-vector-icons -> Fonts
            selecionar todas as fontes que se quer usar e arrastar para o Xcode->fontes
                  Ele vai perguntar se quer criar um grupo: responda que sim.

e) abra no Xcode o arquivo: info.plist e inclua em:
      Fonts provided by application
            item 0 -> String -> FontAwesome.ttf
            item 1 -> String -> Foundation.ttf, etc até encerrar a lista de fontes.

f) run command + shift + K para limpar o último build
g) command + B para iniciar um novo build



-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

instalar async-storage
yarn add @react-native-async-storage/async-storage

instalar datetimepicker: para colocar na tela o calendário.
serve para ios e android.
yarn add @react-native-community/datetimepicker

instalar AXIOS:
yarn add axios

instalar MOMENT: - dependencia para manipular datas:
yarn add moment

para importar:
import AsyncStorage from '@react-native-async-storage/async-storage';

Após instalar e importar, pelo terminal, atualizar o cocoapods no diretório do ios:
Se não fizer pode dar erro de não encontrar o async-storage.
pod update
______________________________________________________________________
- PALETA DE CORES:
1) do logo da OXY:
      - '#2b0600' - fundo do logo.
      - '#DF7800' - cor da letra da oxy.
      - '#EA6D00' - cor do Y do logo da oxy.
      - '#FFFDFF'- cod do O do oxy.
      - rgba(234,109,0,0.92) - cor do Y do logo da oxy em RGBA.
