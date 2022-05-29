import styled from 'styled-components/native';
import {SquareButton} from '../square-button/square-button.component';

export const Container = styled.View`
  flex-direction: row;
  height: ${({size}) => size}px;
  align-items: center;
  padding-top: ${props => props.theme.sizes[0]};
  padding-bottom: ${props => props.theme.sizes[0]};
`;

export const BackButton = styled(SquareButton)``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${props => props.theme.fontFamilies.NunitoSemiBold};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
  
`;
