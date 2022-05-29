import React from 'react';
import {CircleButton} from '../../../../components/circle-button/circle-button.component';
import {SearchBar} from '../../../../components/search-bar/search-bar.component';
import {Spacer} from '../../../../components/spacer/spacer.component';
import bell from '../../../../../assets/svgs/bell';
import activeBell from '../../../../../assets/svgs/active-bell';

import {Container} from './search-bar-section.styles';

export const SearchBarSection = ({isNotificationReceived}) => {
  return (
    <Container>
      <SearchBar />
      <Spacer size="large" position="left">
        <CircleButton
          isActive={isNotificationReceived}
          imageSource={bell}
          activeImageSource={activeBell}
          size={36}
        />
      </Spacer>
    </Container>
  );
};
