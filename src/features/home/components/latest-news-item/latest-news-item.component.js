import React from 'react';
import {useWindowDimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
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
            <Author>
              {t('newsScope.by')} {author}
            </Author>
            <NewsTitle>{title}</NewsTitle>
          </HeaderContentContainer>

          <NewsDescription>{description}</NewsDescription>
        </ContentContainer>
      </ContainerCover>
    </Container>
  );
};
