import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Screen} from '../../../components/screen/screen.component';
import {SearchBarSection} from '../../home/components/search-bar-section/search-bar-section.component';
import {NewsCategorySection} from '../../home/components/news-category-section/news-category-section.component';
import {NewsSection} from '../../home/components/news-section/news-section.component';
import {NewsContext} from '../../../contexts/news.context';
import {Spacer} from '../../../components/spacer/spacer.component';

import {NewsCategoryWrapper, FilterButton} from './search.styles';
import filterIcon from '../../../../assets/svgs/filter';

export const SearchScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {isNotificationReceived, getLatestNews, getAllNews} =
    useContext(NewsContext);

  useEffect(() => {
    getLatestNews();
    getAllNews();
  }, []);
  return (
    <Screen>
      <Spacer position="top" size="large">
        <SearchBarSection
          isNotificationReceived={isNotificationReceived}
          onPressPrefix={() => navigation.goBack()}
        />
      </Spacer>
      <Spacer position="top" size="large">
        <NewsCategoryWrapper>
          <Spacer position="right" size="medium">
            <FilterButton
              size={32}
              title={t('searchScope.filter')}
              prefixSource={filterIcon}
            />
          </Spacer>
          <NewsCategorySection />
        </NewsCategoryWrapper>
      </Spacer>
      <Spacer position="top" size="large">
        <NewsSection navigation={navigation} />
      </Spacer>
    </Screen>
  );
};
