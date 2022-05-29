import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({width}) => width - 32}px;
`;

export const Cover = styled.Image`
  height: ${({coverHeight}) => coverHeight}px;
  border-radius: 8px;
`;

export const PublishedDate = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoLight};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  margin-top: ${props => props.theme.sizes[1]};
`;

export const NewsTitle = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkSemiBold};
  font-size: ${props => props.theme.fontSizes.button};
  color: ${props => props.theme.colors.text.primary};
  margin-top: ${props => props.theme.sizes[0]};
`;

export const NewsContent = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkSemiBold};
  font-size: ${props => props.theme.fontSizes.button};
  color: ${props => props.theme.colors.text.primary};
  margin-top: ${props => props.theme.sizes[0]};
`;

export const Author = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  margin-top: ${props => props.theme.sizes[0]};
`;
