import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {BarButtonVariant} from './bar-button-variant.enum';

const bgVariant = {
  primary: props => props.theme.colors.ui.primary,
  secondary: props => props.theme.colors.ui.secondary,
};

const textColorVariant = {
  primary: props => props.theme.colors.ui.secondary,
  secondary: props => props.theme.colors.ui.primary,
};

export const BarButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({variant}) => bgVariant[variant]};
  padding: 10px;
  height: 48px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({variant}) => textColorVariant[variant]};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.body};
`;
