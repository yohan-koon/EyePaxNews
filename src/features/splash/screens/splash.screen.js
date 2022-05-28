/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {ThemeContext} from 'styled-components/native';

import {Screen} from '../../../components/screen/screen.component';

import {AppTitle} from './splash.styles';
import {AuthContext} from '../../../contexts/auth.context';

export const SplashScreen = () => {
  const theme = useContext(ThemeContext);
  const {requestToValidateUser} = useContext(AuthContext);

  useEffect(() => {
    setTimeout(async () => {
      await requestToValidateUser();
    }, 2000);
  }, []);

  return (
    <Screen bgColor={theme.colors.brand.primary} horizontalMargin={null}>
      <AppTitle>EyePax News</AppTitle>
    </Screen>
  );
};
