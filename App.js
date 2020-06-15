import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from 'app/screens/index';
import {ThemeProvider} from 'styled-components';
import * as theme from 'app/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
