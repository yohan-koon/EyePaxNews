import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {BarButtonVariant} from '../../../../components/bar-button/bar-button-variant.enum';
import {sortByOptions} from './filter.mock';
import {BarButton} from '../../../../components/bar-button/bar-button.component';

import {
  Container,
  Header,
  FilterTitle,
  ResetButton,
  SortByContainer,
  SortByTitle,
  SaveButton,
  SortByList,
  ItemSeperator,
} from './filter.styles';
import {NewsContext} from '../../../../contexts/news.context';

export const Fitler = ({onPressSave, onPressReset}) => {
  const {t} = useTranslation();
  const {selectedSortByOption, onChangeSelectedSortByOption} =
    useContext(NewsContext);
  return (
    <Container>
      <Header>
        <FilterTitle>{t('searchScope.filter')}</FilterTitle>
        <ResetButton
          title={t('commonScope.reset')}
          size={32}
          variant={BarButtonVariant.secondary}
          onTap={onPressReset}
        />
      </Header>
      <SortByContainer>
        <SortByTitle>{t('searchScope.sortBy')}</SortByTitle>
        <SortByList
          data={sortByOptions}
          renderItem={({item}) => (
            <BarButton
              title={item.name}
              variant={
                selectedSortByOption.id === item.id
                  ? BarButtonVariant.primary
                  : BarButtonVariant.secondary
              }
              size={32}
              onTap={() => onChangeSelectedSortByOption(item)}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
          ItemSeparatorComponent={() => <ItemSeperator />}
          showsHorizontalScrollIndicator={false}
        />
      </SortByContainer>
      <SaveButton
        title={t('commonScope.save').toUpperCase()}
        onTap={onPressSave}
      />
    </Container>
  );
};
