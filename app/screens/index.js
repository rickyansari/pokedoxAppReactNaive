import React from 'react';
import Home from 'app/screens/Home';
import PokemonDetail from 'app/screens/PokemonDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_NAME} from 'app/config/commonConstants';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAME.HOME}>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAME.HOME}
        component={Home}
      />
      <Stack.Screen
        name={SCREEN_NAME.POKEMON_DETAIL}
        component={PokemonDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
