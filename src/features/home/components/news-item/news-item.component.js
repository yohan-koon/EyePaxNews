import React from 'react';
import {useWindowDimensions} from 'react-native';
import {getDisplayDate} from '../../../../utils/date/date.utils';
import {
  Container,
  ContainerCover,
  Author,
  NewsTitle,
  NewsCreatedDate,
  ContentContainer,
  HeaderContentContainer,
  FooterContentContainer,
} from './news-item.styles';

export const NewsItem = ({data, onPress}) => {
  const {height, width} = useWindowDimensions();
  const conainerHeight = height * (1 / 7);
  const {author, title, publishedAt, urlToImage} = data;

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
            <NewsTitle numberOfLines={3} ellipsizeMode="tail">
              {title}
            </NewsTitle>
          </HeaderContentContainer>
          <FooterContentContainer>
            <Author>{author}</Author>
            <NewsCreatedDate>{getDisplayDate(publishedAt)}</NewsCreatedDate>
          </FooterContentContainer>
        </ContentContainer>
      </ContainerCover>
    </Container>
  );
};
