import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Principal from './pages/Principal';
import Welcome from './pages/Welcome';
import RegisterUser from './pages/RegisterUser';

const Stack = createStackNavigator();

function Routes(){
      return(
            <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home}/>
                  <Stack.Screen name="Principal" component={Principal}/>
                  <Stack.Screen name="Welcome" component={Welcome}/>
                  <Stack.Screen name="RegisterUser" component={RegisterUser}/>
            </Stack.Navigator>
      )
}
export default Routes;
