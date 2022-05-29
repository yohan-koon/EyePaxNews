import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {HomeScreen} from '../../../features/home/screens/home.screen';
import {NewsDetailScreen} from '../../../features/news-detail/news-detail.screen';
import {HotUpdatesScreen} from '../../../features/hot-updates/screens/hot-updates.screen';
import {SearchScreen} from '../../../features/search/screens/search.screen';

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
        options={{}}
      />
      <Stack.Screen name="HotUpdates" component={HotUpdatesScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
