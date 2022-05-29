import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.palatte.black};
  opacity: 0.3;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  color: ${props => props.theme.colors.text.secondary};
  margin-top: ${props => props.theme.sizes[2]};
`;

export const Spinner = styled.ActivityIndicator`
  color: ${props => props.theme.colors.palatte.white};
`;
