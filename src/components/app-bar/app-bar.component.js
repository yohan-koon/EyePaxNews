import React from 'react';
import {Text} from 'react-native';

import {Container, BackButton, Title} from './app-bar.styles';

import backIcon from '../../../assets/svgs/back';

export const AppBar = ({size = 48, title, navigation}) => {
  return (
    <Container size={size}>
      <BackButton
        imageSource={backIcon}
        size={32}
        opacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Title>{title}</Title>
    </Container>
  );
};
