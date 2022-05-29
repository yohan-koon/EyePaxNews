import React from 'react';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import {BottomTabIcon} from '../../../components/bottom-tab-icon/bottom-tab-icon.component';

import { HomeNavigator } from '../home.navigator/home.navigator';
import {ProfileScreen} from '../../../features/profile/screens/profile.screen';
import {FavouriteScreen} from '../../../features/favourite/screens/favourite.screen';

import styles from './app.navigator.styles';

export const AppNavigator = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tabBarStyle, ...styles.shadow},
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              focused={focused}
              image={require('../../../../assets/icons/home.png')}
              label={t('bottomTabScope.home')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteTab"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              focused={focused}
              image={require('../../../../assets/icons/favourite.png')}
              label={t('bottomTabScope.favourite')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              focused={focused}
              image={require('../../../../assets/icons/profile.png')}
              label={t('bottomTabScope.profile')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
