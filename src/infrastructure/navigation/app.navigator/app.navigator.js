import React from 'react';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import {BottomTabIcon} from '../../../components/bottom-tab-icon/bottom-tab-icon.component';

import {HomeScreen} from '../../../features/home/screens/home.screen';
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
        name="Home"
        component={HomeScreen}
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
        name="Favourite"
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
        name="Profile"
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
