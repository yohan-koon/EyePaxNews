/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Navigation} from './src/infrastructure/navigation';
import {ThemeProvider} from 'styled-components/native';

import {NavigationContextProvider} from './src/contexts/navigation.context';

import {theme} from './src/infrastructure/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContextProvider>
          <Navigation />
        </NavigationContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
