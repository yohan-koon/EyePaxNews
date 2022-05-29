import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {latestNewsMock} from './latest-news-section.mock';
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

export const LatestNewsSection = ({}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Header>
        <Title>{t('newsScope.latestNewsTitle')}</Title>
        <LinkButton suffixImage={rightArrow} title={t('newsScope.seeAll')} />
      </Header>
      <Spacer position="top" size="medium">
        <LatestNewsList
          data={latestNewsMock}
          renderItem={({item}) => <LatestNewsItem data={item} />}
          keyExtractor={item => item.url}
          horizontal
          ItemSeparatorComponent={() => <ItemSeperator />}
        />
      </Spacer>
    </Container>
  );
};
