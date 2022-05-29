import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  border-color: ${props => props.theme.colors.ui.border};
  border-width: 1px;
  border-radius: ${({height}) => height / 2}px;
  padding-left: ${props => props.theme.sizes[1]};
  padding-right: ${props => props.theme.sizes[1]};
  align-items: center;
`;

export const TextField = styled.TextInput`
  height: ${({height}) => height}px;
  flex: 1;
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  color: ${props => props.theme.colors.text.label};
`;

export const SearchIcon = styled.Image`
  width: ${({height}) => height * (2 / 5)}px;
  height: ${({height}) => height * (2 / 5)}px;
`;
