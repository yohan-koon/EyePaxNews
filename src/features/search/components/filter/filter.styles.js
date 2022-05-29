import styled from 'styled-components/native';
import {BarButton} from '../../../../components/bar-button/bar-button.component';

export const Container = styled.View`
  padding: ${props => props.theme.sizes[1]};
`;
export const Header = styled.View`
  flex-direction: row;
`;
export const FilterTitle = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoBold};
  font-size: ${props => props.theme.fontSizes.h5};
  color: ${props => props.theme.colors.text.primary};
  flex: 1;
`;
export const ResetButton = styled(BarButton)``;
export const SortByContainer = styled.View`
  margin-top: ${props => props.theme.sizes[1]};
`;
export const SortByList = styled.FlatList`
  margin-top: ${props => props.theme.sizes[1]};
`;
export const SortByTitle = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.button};
  color: ${props => props.theme.colors.text.primary};
`;
export const SaveButton = styled(BarButton)`
  margin-top: ${props => props.theme.sizes[2]};
`;

export const ItemSeperator = styled.View`
  width: ${props => props.theme.sizes[0]};
`;
