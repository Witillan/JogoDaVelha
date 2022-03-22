import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Jogo from '../JogoDaVelha/Components/Jogo'
import Ganhador from '../JogoDaVelha/Components/Vencedor'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Jogo">
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Ganhador" component={Ganhador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}