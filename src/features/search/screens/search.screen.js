import React, {useContext, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Screen} from '../../../components/screen/screen.component';
import {SearchBarSection} from '../../home/components/search-bar-section/search-bar-section.component';
import {NewsCategorySection} from '../../home/components/news-category-section/news-category-section.component';
import {NewsSection} from '../../home/components/news-section/news-section.component';
import {NewsContext} from '../../../contexts/news.context';
import {Spacer} from '../../../components/spacer/spacer.component';

import {NewsCategoryWrapper, FilterButton} from './search.styles';
import filterIcon from '../../../../assets/svgs/filter';
import {Fitler} from '../components/filter/filter.component';

export const SearchScreen = ({navigation}) => {
  const {t} = useTranslation();
  const bottomSheetRef = useRef(null);
  const {
    isNotificationReceived,
    getLatestNews,
    getAllNews,
    resetGetAllNews,
    onChangeSearchKeyword,
  } = useContext(NewsContext);

  useEffect(() => {
    getLatestNews();
    getAllNews();
  }, []);

  const onPressSearch = text => {
    console.log(text);
    if (text == null || text == '') {
      return;
    }
    onChangeSearchKeyword(text);
    getAllNews();
  };
  return (
    <Screen>
      <Spacer position="top" size="large">
        <SearchBarSection
          isNotificationReceived={isNotificationReceived}
          onPressPrefix={() => navigation.goBack()}
          onPressSearch={() => onPressSearch}
        />
      </Spacer>
      <Spacer position="top" size="large">
        <NewsCategoryWrapper>
          <Spacer position="right" size="medium">
            <FilterButton
              size={32}
              title={t('searchScope.filter')}
              prefixSource={filterIcon}
              onTap={() => bottomSheetRef.current.open()}
            />
          </Spacer>
          <NewsCategorySection />
        </NewsCategoryWrapper>
      </Spacer>
      <Spacer position="top" size="large">
        <NewsSection navigation={navigation} />
      </Spacer>
      <RBSheet ref={bottomSheetRef} height={300} openDuration={250}>
        <Fitler
          onPressReset={() => {
            resetGetAllNews();
          }}
          onPressSave={() => {
            bottomSheetRef.current.close();
            getAllNews();
          }}
        />
      </RBSheet>
    </Screen>
  );
};
