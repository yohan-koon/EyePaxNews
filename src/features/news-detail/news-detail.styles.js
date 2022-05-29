import styled from 'styled-components';
import {ImageBackground} from 'react-native';
import {SquareButton} from '../../components/square-button/square-button.component';
import {CircleButton} from '../../components/circle-button/circle-button.component';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(ImageBackground).attrs({
  imageStyle: {borderTopLeftRadius: 20, borderTopRightRadius: 20},
})`
  flex: 0.55;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  top: ${({height, floatingContainerHeight}) =>
    height / 2 - floatingContainerHeight / 2}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const FloatingContainer = styled.View`
  background-color: ${props => props.theme.colors.palatte.whiteSmoke};
  opacity: 0.95;
  position: absolute;
  left: ${props => props.theme.sizes[1]};
  right: ${props => props.theme.sizes[1]};
  top: ${({height, floatingContainerHeight}) =>
    height / 2 - floatingContainerHeight}px;
  height: ${({height, floatingContainerHeight}) => floatingContainerHeight}px;
  border-radius: 16px;
  elevation: 3;
  padding: ${props => props.theme.sizes[1]};
`;

export const PublishedDate = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkSemiBold};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
`;

export const NewsTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NewsTitle = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkBold};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.dark};
`;

export const Author = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoExtraBold};
  font-size: ${props => props.theme.fontSizes.smCaption};
  color: ${props => props.theme.colors.text.dark};
`;

export const ContentContainer = styled.View`
  height: ${({height}) => height * (2 / 5)};
`;

export const Content = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.button};
  color: ${props => props.theme.colors.text.dark};
  margin-top: ${({floatingContainerHeight}) => floatingContainerHeight / 2}px;
  padding: ${props => props.theme.sizes[1]};
`;

export const BackButton = styled(SquareButton)`
  margin-top: 48px;
  margin-left: 24px;
`;

export const FavouriteButton = styled(CircleButton)`
  position: absolute;
  right: 24px;
  bottom: 0px;
`;
