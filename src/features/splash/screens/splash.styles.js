import styled from 'styled-components/native';

export const AppTitle = styled.Text`
  color: ${props => props.theme.colors.text.secondary};
  align-self: center;
  margin: auto;
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: bold;
`;
