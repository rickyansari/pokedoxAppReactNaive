import React from 'react';
import Home from 'app/screens/Home';
import PokemonDetail from 'app/screens/PokemonDetail';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SCREEN_NAME} from 'app/config/commonConstants';

const Stack = createStackNavigator();

export default function AppNavigator() {
  function getOptions({title}) {
    const headerObject = {
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      headerStyleInterpolator: HeaderStyleInterpolators.forFade,
      headerTitle: title,
      headerStyle: {
        height: 80,
      },
      cardStyleInterpolator: ({current, next, layouts}) => {
        return {
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
              {
                scale: next
                  ? next.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    })
                  : 1,
              },
            ],
          },
          overlayStyle: {
            opacity: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
            }),
          },
        };
      },
    };
    return headerObject;
  }

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
