import React from 'react';
import {useTheme} from 'styled-components';
import {SpacerView} from './spacer.styles';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'margin-top',
  left: 'margin-left',
  right: 'margin-right',
  bottom: 'margin-bottom',
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = ({position, size, children}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
