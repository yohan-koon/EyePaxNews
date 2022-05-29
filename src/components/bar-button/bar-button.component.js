import React from 'react';

import {BarButtonVariant} from './bar-button-variant.enum';

import {BarButtonContainer, Title} from './bar-button.styles';

export const BarButton = ({
  title = 'Button Title',
  variant = BarButtonVariant.primary,
  onTap,
  size = 48,
}) => {
  return (
    <BarButtonContainer variant={variant} onPress={onTap} size={size}>
      <Title variant={variant} size={size}>
        {title}
      </Title>
    </BarButtonContainer>
  );
};
