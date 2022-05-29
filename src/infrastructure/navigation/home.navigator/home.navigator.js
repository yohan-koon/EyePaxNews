import React from 'react';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
const Stack = createNativeStackNavigator();

import {HomeScreen} from '../../../features/home/screens/home.screen';
import {NewsDetailScreen} from '../../../features/news-detail/news-detail.screen';

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{...TransitionPresets.ModalPresentationIOS}}
      />
    </Stack.Navigator>
  );
};
