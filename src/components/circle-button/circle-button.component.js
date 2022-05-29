import React from 'react';
import {SvgXml} from 'react-native-svg';

import {Container} from './circle-button.styles';

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
      <SvgXml
        xml={isActive ? activeImageSource : imageSource}
        width={size / 2}
        height={size / 2}
      />
    </Container>
  );
};
