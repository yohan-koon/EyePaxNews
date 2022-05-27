/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {ThemeContext} from 'styled-components/native';

import {NavigationContext} from '../../../contexts/navigation.context';
import {Screen} from '../../../components/screen/screen.component';
import {NavigationStatus} from '../../../enums/navigation-status.enum';

import {AppTitle} from './splash.styles';

export const SplashScreen = () => {
  const theme = useContext(ThemeContext);
  const {onNavigationStausChange} = useContext(NavigationContext);

  useEffect(() => {
    setTimeout(() => {
      onNavigationStausChange(NavigationStatus.NotAuthenticatd);
    }, 2000);
  }, []);

  return (
    <Screen bgColor={theme.colors.brand.primary} horizontalMargin={null}>
      <AppTitle>EyePax News</AppTitle>
    </Screen>
  );
};
