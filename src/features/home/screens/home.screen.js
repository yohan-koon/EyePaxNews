import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';

import {Screen} from '../../../components/screen/screen.component';
import {SearchBarSection} from '../components/search-bar-section/search-bar-section.component';
import {LatestNewsSection} from '../components/latest-news-section/latest-news-section.component';
import {NewsCategorySection} from '../components/news-category-section/news-category-section.component';
import {NewsSection} from '../components/news-section/news-section.component';
import {NewsContext} from '../../../contexts/news.context';
import {Spacer} from '../../../components/spacer/spacer.component';

export const HomeScreen = () => {
  const {isNotificationReceived, getLatestNews, getAllNews} =
    useContext(NewsContext);

  useEffect(() => {
    getLatestNews();
    getAllNews();
  }, []);
  return (
    <Screen>
      <Spacer position="top" size="large">
        <SearchBarSection isNotificationReceived={isNotificationReceived} />
      </Spacer>
      <Spacer position="top" size="large">
        <LatestNewsSection />
      </Spacer>
      <Spacer position="top" size="large">
        <NewsCategorySection />
      </Spacer>
      <Spacer position="top" size="large">
        <NewsSection />
      </Spacer>
    </Screen>
  );
};
