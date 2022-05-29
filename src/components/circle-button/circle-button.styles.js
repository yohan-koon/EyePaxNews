import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background-color: ${({backgroundColor, theme}) =>
    backgroundColor ? backgroundColor : theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${({size}) => size / 2}px; ;
`;

export const Icon = styled.Image`
  width: ${({size}) => size / 2}px;
  height: ${({size}) => size / 2}px;
`;
