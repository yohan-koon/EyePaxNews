import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  top: 14px;
`;

export const TabIcon = styled.Image`
  width: 25px;
  height: 25px;
  tint-color: ${({focused, theme}) =>
    focused ? theme.colors.ui.primary : theme.colors.text.label};
`;

export const TabLabel = styled.Text`
  font-size: 12px;
  margin-top: 8px;
  color: ${({focused, theme}) =>
    focused ? theme.colors.ui.primary : theme.colors.text.label};
`;
