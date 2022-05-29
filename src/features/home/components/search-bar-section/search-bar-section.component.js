import React from 'react';
import {View, Text} from 'react-native';
import {CircleButton} from '../../../../components/circle-button/circle-button.component';
import {SearchBar} from '../../../../components/search-bar/search-bar.component';
import {Spacer} from '../../../../components/spacer/spacer.component';

import {Container} from './search-bar-section.styles';

export const SearchBarSection = ({isNotificationReceived}) => {
  return (
    <Container>
      <SearchBar />
      <Spacer size="large" position="left">
        <CircleButton
          isActive={isNotificationReceived}
          imageSource={require('../../../../../assets/icons/bell.png')}
          activeImageSource={require('../../../../../assets/icons/active-bell.png')}
        />
      </Spacer>
    </Container>
  );
};
