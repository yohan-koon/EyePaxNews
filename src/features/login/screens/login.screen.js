import React, {useContext, useEffect} from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

import Snackbar from 'react-native-snackbar';

import {ThemeContext} from 'styled-components';
import {AuthContext} from '../../../contexts/auth.context';
import {Screen} from '../../../components/screen/screen.component';

import {Wrapper, AppTitle, SignInLabel, AuthButton} from './login.styles';

// GoogleSignin.configure({
//   webClientId:
//     '791207290681-le69j0stf5vas1t3p8fdtqe1b0ikgo9e.apps.googleusercontent.com',
// });
// GoogleSignin.configure({
//   webClientId:
//     '791207290681-3fbscpto6rv325is2sk9irt3bn789gee.apps.googleusercontent.com',
// });

export const LoginScreen = () => {
  const theme = useContext(ThemeContext);
  const {isLoading, error, signInWithGoogle} = useContext(AuthContext);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [isLoading]);
  return (
    <Screen
      bgColor={theme.colors.brand.primary}
      horizontalMargin={null}
      isLoading={isLoading}>
      <Wrapper>
        <AppTitle>EyePax News</AppTitle>

        <SignInLabel>Sign in with google for EyePax News</SignInLabel>
        <AuthButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={signInWithGoogle}
        />
      </Wrapper>
    </Screen>
  );
};
