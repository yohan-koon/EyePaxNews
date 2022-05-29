import React from 'react';
import {SvgXml} from 'react-native-svg';

import {BarButtonVariant} from './bar-button-variant.enum';

import {BarButtonContainer, Title} from './bar-button.styles';

export const BarButton = ({
  title = 'Button Title',
  variant = BarButtonVariant.primary,
  onTap,
  size = 48,
  style,
  prefixSource,
  suffixSource,
}) => {
  return (
    <BarButtonContainer
      variant={variant}
      onPress={onTap}
      size={size}
      style={style}>
      {prefixSource && (
        <SvgXml xml={prefixSource} width={size / 2} height={size / 2} />
      )}
      <Title
        variant={variant}
        size={size}
        prefixSource={prefixSource}
        suffixSource={suffixSource}>
        {title}
      </Title>
      {suffixSource && (
        <SvgXml xml={suffixSource} width={size / 2} height={size / 2} />
      )}
    </BarButtonContainer>
  );
};
