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

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {NavigationContextProvider} from './src/contexts/navigation.context';
import {AuthContextProvider} from './src/contexts/auth.context';
import {NewsContextProvider} from './src/contexts/news.context';

import {isAndroid} from './src/utils/platform/platform.utils';

import {theme} from './src/infrastructure/theme';

GoogleSignin.configure({
  webClientId: isAndroid()
    ? '791207290681-3fbscpto6rv325is2sk9irt3bn789gee.apps.googleusercontent.com'
    : '791207290681-le69j0stf5vas1t3p8fdtqe1b0ikgo9e.apps.googleusercontent.com',
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NewsContextProvider>
          <NavigationContextProvider>
            <AuthContextProvider>
              <Navigation />
            </AuthContextProvider>
          </NavigationContextProvider>
        </NewsContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
