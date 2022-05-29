import React from 'react';
import {SvgXml} from 'react-native-svg';

import {Container} from './square-button.styles';

export const SquareButton = ({
  onPress,
  size = 48,
  backgroundColor,
  isActive,
  imageSource,
  activeImageSource,
  style,
  opacity = 1,
}) => {
  return (
    <Container
      size={size}
      onPress={onPress}
      backgroundColor={backgroundColor}
      style={style}
      opacity={opacity}>
      <SvgXml
        xml={isActive ? activeImageSource : imageSource}
        width={size / 2}
        height={size / 2}
      />
    </Container>
  );
};
