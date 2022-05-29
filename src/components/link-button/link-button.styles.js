import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.sizes[0]};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.ui.secondary};
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.caption};
  padding-right: ${props => props.theme.sizes[0]};
`;
