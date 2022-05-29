import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkBold};
  font-size: ${props => props.theme.fontSizes.title};
  flex: 1;
`;

export const LatestNewsList = styled.FlatList``;

export const ItemSeperator = styled.View`
  width: ${props => props.theme.sizes[0]};
`;
