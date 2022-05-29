import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Container, TextField} from './search-bar.styles';

import searchIcon from '../../../assets/svgs/search';

export const SearchBar = ({height = 36, onPressSearch, initialValue}) => {
  const [text, onChangeText] = useState(null);
  useEffect(() => {
    onChangeText(initialValue);
  }, []);
  return (
    <Container height={height}>
      <TextField onChangeText={onChangeText} value={text} height={height} />
      <TouchableOpacity onPress={() => onPressSearch(text)}>
        <SvgXml xml={searchIcon} height={height / 2} width={height / 2} />
      </TouchableOpacity>
    </Container>
  );
};
