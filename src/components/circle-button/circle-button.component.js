import React from 'react';

import {Container, Icon} from './circle-button.styles';

export const CircleButton = ({
  onPress,
  size = 48,
  backgroundColor,
  isActive,
  imageSource,
  activeImageSource,
}) => {
  return (
    <Container size={size} onPress={onPress} backgroundColor={backgroundColor}>
      <Icon source={isActive ? activeImageSource : imageSource} size={size} />
    </Container>
  );
};
