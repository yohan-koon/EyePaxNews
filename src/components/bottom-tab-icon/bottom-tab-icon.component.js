import React from 'react';
import {isAndroid} from '../../utils/platform/platform.utils';
import {Container, TabIcon, TabLabel} from './bottom-tab-icon.styles';

export const BottomTabIcon = ({focused, image, label}) => {
  return (
    <Container isAndroid={isAndroid() ? true : false}>
      <TabIcon source={image} resizeMode="contain" focused={focused} />
      <TabLabel focused={focused}>{label}</TabLabel>
    </Container>
  );
};
