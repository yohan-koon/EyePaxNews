import styled from 'styled-components/native';

const bgVariant = {
  primary: props => props.theme.colors.ui.primary,
  secondary: props => props.theme.colors.ui.disabled,
};

const textColorVariant = {
  primary: props => props.theme.colors.text.secondary,
  secondary: props => props.theme.colors.text.primary,
};

const borderColorVariant = {
  primary: props => props.theme.colors.ui.primary,
  secondary: props => props.theme.colors.ui.border,
};

export const BarButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({variant}) => bgVariant[variant]};
  padding-left: ${({size}) => size / 2}px;
  padding-right: ${({size}) => size / 2}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size / 2}px;
  border-width: 1px;
  border-color: ${({variant}) => borderColorVariant[variant]};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold}
  color: ${({variant}) => textColorVariant[variant]};
  font-weight: ${({theme, size}) =>
    size > 32 ? theme.fontWeights.bold : theme.fontWeights.medium};
  font-size: ${({size}) => size * (3 / 8)};
  margin-left: ${({size, prefixSource}) => (prefixSource ? size / 4 : 0)}px;
  margin-right: ${({size, suffixSource}) => (suffixSource ? size / 4 : 0)}px;
`;
