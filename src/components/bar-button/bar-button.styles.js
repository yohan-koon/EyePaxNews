import styled from 'styled-components/native';

const bgVariant = {
  primary: props => props.theme.colors.ui.primary,
  secondary: props => props.theme.colors.ui.disabled,
};

const textColorVariant = {
  primary: props => props.theme.colors.text.secondary,
  secondary: props => props.theme.colors.text.primary,
};

export const BarButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({variant}) => bgVariant[variant]};
  padding-left: ${({size}) => size / 2}px;
  padding-right: ${({size}) => size / 2}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size / 2}px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold}
  color: ${({variant}) => textColorVariant[variant]};
  font-weight: ${({theme, size}) =>
    size > 32 ? theme.fontWeights.bold : theme.fontWeights.medium};
  font-size: ${({size}) => size * (3 / 8)};
`;
