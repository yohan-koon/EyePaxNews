import React from 'react';

import {Container, TabIcon, TabLabel} from './bottom-tab-icon.styles';

export const BottomTabIcon = ({focused, image, label}) => {
  return (
    <Container>
      <TabIcon source={image} resizeMode="contain" focused={focused} />
      <TabLabel focused={focused}>{label}</TabLabel>
    </Container>
  );
};
