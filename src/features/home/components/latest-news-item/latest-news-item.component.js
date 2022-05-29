import React from 'react';
import {useWindowDimensions} from 'react-native';
import {
  Container,
  ContainerCover,
  Author,
  NewsTitle,
  NewsDescription,
  ContentContainer,
  HeaderContentContainer,
} from './latest-news-item.styles';

export const LatestNewsItem = ({data, onPress}) => {
  const {height, width} = useWindowDimensions();
  const conainerHeight = height * (2 / 7);
  const {author, title, description, urlToImage} = data;

  return (
    <Container
      width={width}
      height={conainerHeight}
      onPress={() => onPress(data)}>
      <ContainerCover
        source={{uri: urlToImage}}
        resizeMode="cover"
        height={conainerHeight}>
        <ContentContainer height={conainerHeight}>
          <HeaderContentContainer>
            <Author>by {author}</Author>
            <NewsTitle>{title}</NewsTitle>
          </HeaderContentContainer>

          <NewsDescription>{description}</NewsDescription>
        </ContentContainer>
      </ContainerCover>
    </Container>
  );
};
