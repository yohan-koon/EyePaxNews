import React from 'react';
import {useWindowDimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getDisplayDate} from '../../../../utils/date/date.utils';
import {Spacer} from '../../../../components/spacer/spacer.component';
import {
  Container,
  Cover,
  PublishedDate,
  NewsTitle,
  NewsContent,
  Author,
} from './hot-update-news-item.styles';

export const HotUpdateNewsItem = ({data, onPress}) => {
  const {t} = useTranslation();
  const {height, width} = useWindowDimensions();
  const coverHeight = height * (1 / 7);
  const {author, title, publishedAt, urlToImage, content} = data;

  return (
    <Container width={width} onPress={() => onPress(data)}>
      <Cover source={{uri: urlToImage}} coverHeight={coverHeight} />
      <PublishedDate>{getDisplayDate(publishedAt)}</PublishedDate>
      <NewsTitle>{title}</NewsTitle>
      <NewsContent>{content}</NewsContent>
      <Author>
        {t('commonScope.publishedBy')} {author}
      </Author>
    </Container>
  );
};
