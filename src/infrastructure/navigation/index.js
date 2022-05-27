import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NavigationContext} from '../../contexts/navigation.context';
import {AppNavigator} from './app.navigator';
import {EntryNavigator} from './entry.navigator';
import {OnboardingNavigator} from './onboarding.navigator';

import {NavigationStatus} from '../../enums/navigation-status.enum';

export const Navigation = () => {
  const {navigationStatus} = useContext(NavigationContext);
  return (
    <NavigationContainer>
      {navigationStatus === NavigationStatus.Onboarding && <EntryNavigator />}
      {navigationStatus === NavigationStatus.NotAuthenticatd && (
        <OnboardingNavigator />
      )}
      {navigationStatus === NavigationStatus.Authenticated && <AppNavigator />}
    </NavigationContainer>
  );
};
