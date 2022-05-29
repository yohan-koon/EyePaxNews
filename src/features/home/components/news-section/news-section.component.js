import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Snackbar from 'react-native-snackbar';

import {LinkButton} from '../../../../components/link-button/link-button.component';
import {NewsItem} from '../news-item/news-item.component';
import {Container, NewsList, ItemSeperator} from './news-section.styles';

import {Spacer} from '../../../../components/spacer/spacer.component';
import {NewsContext} from '../../../../contexts/news.context';

export const NewsSection = ({}) => {
  const {t} = useTranslation();
  const {isLoadingGetAllNews, allNewsLoadingError, allNews, getAllNews} =
    useContext(NewsContext);

  useEffect(() => {
    if (isLoadingGetAllNews) {
      return;
    }
    if (allNewsLoadingError) {
      Snackbar.show({
        text: allNewsLoadingError,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [isLoadingGetAllNews]);

  return (
    <Container>
      <Spacer position="top" size="medium">
        <NewsList
          data={allNews}
          renderItem={({item}) => <NewsItem data={item} />}
          keyExtractor={item => item.url}
          ItemSeparatorComponent={() => <ItemSeperator />}
          showsHorizontalScrollIndicator={false}
          onEndReached={() => getAllNews()}
          onEndReachedThreshold={0.5}
        />
      </Spacer>
    </Container>
  );
};
