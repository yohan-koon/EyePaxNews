import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({horizontalMargin}) =>
    horizontalMargin && `margin-left: ${horizontalMargin}px;`}
    ${({horizontalMargin}) =>
    horizontalMargin && `margin-right: ${horizontalMargin}px;`}
  flex: 1;
`;

export const SafeAreaScreenContainer = styled(SafeAreaView)`
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({horizontalMargin}) =>
    horizontalMargin && `margin-left: ${horizontalMargin}px;`}
    ${({horizontalMargin}) =>
    horizontalMargin && `margin-right: ${horizontalMargin}px;`}
  flex: 1;
`;

export const ScreenScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})``;
