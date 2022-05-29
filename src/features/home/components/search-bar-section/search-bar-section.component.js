import React from 'react';
import {CircleButton} from '../../../../components/circle-button/circle-button.component';
import {SearchBar} from '../../../../components/search-bar/search-bar.component';
import {Spacer} from '../../../../components/spacer/spacer.component';
import bell from '../../../../../assets/svgs/bell';
import activeBell from '../../../../../assets/svgs/active-bell';

import {Container} from './search-bar-section.styles';
import {SquareButton} from '../../../../components/square-button/square-button.component';

import backIcon from '../../../../../assets/svgs/back';

export const SearchBarSection = ({
  isNotificationReceived,
  onPressSearch,
  onPressSuffix,
  onPressPrefix,
}) => {
  return (
    <Container>
      {onPressPrefix && (
        <Spacer size="large" position="right">
          <SquareButton
            isActive={isNotificationReceived}
            imageSource={backIcon}
            size={36}
            onPress={onPressPrefix}
          />
        </Spacer>
      )}
      <SearchBar onPressSearch={text => onPressSearch(text)} />
      {onPressSuffix && (
        <Spacer size="large" position="left">
          <CircleButton
            isActive={isNotificationReceived}
            imageSource={bell}
            activeImageSource={activeBell}
            size={36}
            onPress={onPressPrefix}
          />
        </Spacer>
      )}
    </Container>
  );
};
