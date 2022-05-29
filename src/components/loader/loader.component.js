import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import {Wrapper, Spinner, LoadingText} from './loader.styles';

export const Loader = ({isLoading}) => {
  const theme = useContext(ThemeContext);
  return (
    isLoading && (
      <Wrapper>
        <Spinner size="small" color={theme.colors.palatte.white} />
        <LoadingText>Loading, Please wait...</LoadingText>
      </Wrapper>
    )
  );
};
