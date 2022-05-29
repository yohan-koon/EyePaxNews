import styled from 'styled-components/native';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AppTitle = styled.Text`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: bold;
`;

export const SignInLabel = styled.Text`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: bold;
  margin-top: 25%;
`;

export const AuthButton = styled(GoogleSigninButton)`
  width: 92%;
  height: 48px;
  margin: 4%;
`;
