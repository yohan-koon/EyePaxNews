import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Snackbar from 'react-native-snackbar';
import {LinkButton} from '../../../../components/link-button/link-button.component';
import {LatestNewsItem} from '../latest-news-item/latest-news-item.component';
import {
  Container,
  Header,
  Title,
  LatestNewsList,
  ItemSeperator,
} from './latest-news-section.styles';

import rightArrow from '../../../../../assets/svgs/right-arrow';
import {Spacer} from '../../../../components/spacer/spacer.component';
import {NewsContext} from '../../../../contexts/news.context';

export const LatestNewsSection = ({navigation}) => {
  const {t} = useTranslation();
  const {isLoadingGetLatestNews, latestNewsLoadingError, latestNews} =
    useContext(NewsContext);

  useEffect(() => {
    if (isLoadingGetLatestNews) {
      return;
    }
    if (latestNewsLoadingError) {
      Snackbar.show({
        text: latestNewsLoadingError,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [isLoadingGetLatestNews]);

  return (
    <Container>
      <Header>
        <Title>{t('newsScope.latestNewsTitle')}</Title>
        <LinkButton
          suffixImage={rightArrow}
          title={t('newsScope.seeAll')}
          onPress={() => navigation.navigate('HotUpdates')}
        />
      </Header>
      <Spacer position="top" size="medium">
        <LatestNewsList
          data={latestNews}
          renderItem={({item}) => (
            <LatestNewsItem
              data={item}
              onPress={data => navigation.navigate('NewsDetail', {news: data})}
            />
          )}
          keyExtractor={item => item.url}
          horizontal
          ItemSeparatorComponent={() => <ItemSeperator />}
          showsHorizontalScrollIndicator={false}
        />
      </Spacer>
    </Container>
  );
};
