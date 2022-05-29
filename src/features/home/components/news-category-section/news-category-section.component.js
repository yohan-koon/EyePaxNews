import React, {useContext} from 'react';
import {Text} from 'react-native';
import {NewsContext} from '../../../../contexts/news.context';
import {newsCategoriesMock} from './news-category-section.mock';
import {BarButton} from '../../../../components/bar-button/bar-button.component';
import {BarButtonVariant} from '../../../../components/bar-button/bar-button-variant.enum';
import {
  Container,
  NewsCategoryList,
  ItemSeperator,
} from './news-category-section.styles';

export const NewsCategorySection = () => {
  const {onChangeNewsCategory, selectedNewsCategory} = useContext(NewsContext);
  return (
    <Container>
      <NewsCategoryList
        data={newsCategoriesMock}
        renderItem={({item}) => (
          <BarButton
            title={item.name}
            variant={
              selectedNewsCategory.id === item.id
                ? BarButtonVariant.primary
                : BarButtonVariant.secondary
            }
            size={32}
            onTap={() => onChangeNewsCategory(item)}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        ItemSeparatorComponent={() => <ItemSeperator />}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
