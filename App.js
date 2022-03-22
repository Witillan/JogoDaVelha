import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Jogo from '../JogoDaVelha/Components/Jogo'
import Ganhador from '../JogoDaVelha/Components/Vencedor'
import Empate from '../JogoDaVelha/Components/Empate'
import Home from '../JogoDaVelha/Components/Home'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Ganhador" component={Ganhador} />
        <Stack.Screen name="Empate" component={Empate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}