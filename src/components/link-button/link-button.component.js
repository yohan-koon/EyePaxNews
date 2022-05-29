import React from 'react';
import {SvgXml} from 'react-native-svg';

import {Container, Title} from './link-button.styles';

export const LinkButton = ({title, suffixImage, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <SvgXml xml={suffixImage} width={12} height={12} />
    </Container>
  );
};
