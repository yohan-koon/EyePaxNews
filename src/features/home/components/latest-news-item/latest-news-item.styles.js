import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const Container = styled.TouchableOpacity`
  width: ${({width}) => width - 32}px;
  height: ${({height}) => height}px;
  border-radius: 16px;
`;

export const ContainerCover = styled(ImageBackground).attrs({
  imageStyle: {borderRadius: 8},
})`
  flex: 1;
  border-radius: 16px;
  padding-bottom: ${({height}) => height / 9}px;
`;

export const ContentContainer = styled.View`
  margin-top: ${({height}) => height / 5}px;
  padding: ${props => props.theme.sizes[1]};
  flex: 1;
`;

export const HeaderContentContainer = styled.View`
  flex: 1;
`;

export const Author = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoExtraBold};
  font-size: ${props => props.theme.fontSizes.smCaption};
  color: ${props => props.theme.colors.text.secondary};
`;

export const NewsTitle = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkBold};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.secondary};
`;

export const NewsDescription = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoRegular};
  font-size: ${props => props.theme.fontSizes.smCaption};
  color: ${props => props.theme.colors.text.secondary};
`;
