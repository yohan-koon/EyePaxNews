import React from 'react';
import {useWindowDimensions, ScrollView, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getDisplayDate} from '../../utils/date/date.utils';
import {Screen} from '../../components/screen/screen.component';

import {
  Container,
  Header,
  Footer,
  FloatingContainer,
  PublishedDate,
  NewsTitleContainer,
  NewsTitle,
  Author,
  ContentContainer,
  Content,
  BackButton,
  FavouriteButton,
} from './news-detail.styles';

import backIcon from '../../../assets/svgs/back';
import heartIcon from '../../../assets/svgs/double-heart';

export const NewsDetailScreen = ({route, navigation}) => {
  const {t} = useTranslation();
  const {news} = route.params;
  const {height, width} = useWindowDimensions();
  const floatingContainerHeight = height / 6;
  const {author, title, description, url, urlToImage, publishedAt, content} =
    news;
  return (
    <Screen horizontalMargin={null} isSafeArea={false}>
      <Container>
        <Header source={{uri: urlToImage}} resizeMode="cover">
          <BackButton
            imageSource={backIcon}
            size={32}
            opacity={0.8}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Header>
        <Footer
          height={height}
          floatingContainerHeight={floatingContainerHeight}>
          <ContentContainer height={height}>
            <ScrollView>
              <Content floatingContainerHeight={floatingContainerHeight}>
                {content}
              </Content>
            </ScrollView>
            <FavouriteButton imageSource={heartIcon} />
          </ContentContainer>
        </Footer>
        <FloatingContainer
          height={height}
          floatingContainerHeight={floatingContainerHeight}>
          <PublishedDate>{getDisplayDate(publishedAt)}</PublishedDate>
          <NewsTitleContainer>
            <NewsTitle numberOfLines={3} ellipsizeMode="tail">
              {title}
            </NewsTitle>
          </NewsTitleContainer>
          <Author>
            {t('newsScope.publishedBy')} {author}
          </Author>
        </FloatingContainer>
      </Container>
    </Screen>
  );
};
