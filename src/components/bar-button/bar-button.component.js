import React from 'react';

import {BarButtonVariant} from './bar-button-variant.enum';

import {BarButtonContainer, Title} from './bar-button.styles';

export const BarButton = ({
  title = 'Button Title',
  variant = BarButtonVariant.primary,
  onTap,
}) => {
  return (
    <BarButtonContainer variant={variant} onPress={onTap}>
      <Title variant={variant}>{title}</Title>
    </BarButtonContainer>
  );
};
