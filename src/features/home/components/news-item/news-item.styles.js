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
`;

export const ContentContainer = styled.View`
  padding: ${props => props.theme.sizes[1]};
  flex: 1;
`;

export const HeaderContentContainer = styled.View`
  flex: 1;
`;

export const FooterContentContainer = styled.View`
  flex-direction: row;
`;

export const Author = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.secondary};
  flex: 1;
`;

export const NewsTitle = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NewYorkSemiBold};
  font-size: ${props => props.theme.fontSizes.button};
  color: ${props => props.theme.colors.text.secondary};
`;

export const NewsCreatedDate = styled.Text`
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.secondary};
`;
