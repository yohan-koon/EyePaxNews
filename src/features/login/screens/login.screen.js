import React, {useContext, useEffect} from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

import Snackbar from 'react-native-snackbar';
import {useTranslation} from 'react-i18next';

import {ThemeContext} from 'styled-components';
import {AuthContext} from '../../../contexts/auth.context';
import {Screen} from '../../../components/screen/screen.component';

import {Wrapper, AppTitle, SignInLabel, AuthButton} from './login.styles';

export const LoginScreen = () => {
  const theme = useContext(ThemeContext);
  const {t} = useTranslation();
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
        <AppTitle>{t('commonScope.appName')}</AppTitle>

        <SignInLabel>{t('authScope.signInWithGoogle')}</SignInLabel>
        <AuthButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={signInWithGoogle}
        />
      </Wrapper>
    </Screen>
  );
};
