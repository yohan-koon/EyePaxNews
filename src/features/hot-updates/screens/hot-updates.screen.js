import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Screen} from '../../../components/screen/screen.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {AppBar} from '../../../components/app-bar/app-bar.component';

import {NewsList, ItemSeperator} from './hot-updates.styles';
import {NewsContext} from '../../../contexts/news.context';
import {HotUpdateNewsItem} from '../components/hot-update-news-item/hot-update-news-item.component';

export const HotUpdatesScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {latestNews, getAllNews} = useContext(NewsContext);
  return (
    <Screen>
      <AppBar title={t('hotUpdates.title')} navigation={navigation} />
      <Spacer position="top" size="medium">
        <NewsList
          data={latestNews}
          renderItem={({item}) => (
            <HotUpdateNewsItem
              data={item}
              onPress={data => navigation.navigate('NewsDetail', {news: data})}
            />
          )}
          keyExtractor={item => item.url}
          ItemSeparatorComponent={() => <ItemSeperator />}
          showsHorizontalScrollIndicator={false}
        />
      </Spacer>
    </Screen>
  );
};
