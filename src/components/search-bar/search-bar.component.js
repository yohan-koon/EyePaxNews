import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, TextField, SearchIcon} from './search-bar.styles';

export const SearchBar = ({height = 48, onPressSearch}) => {
  const [text, onChangeText] = useState(null);
  return (
    <Container height={height}>
      <TextField onChangeText={onChangeText} value={text} height={height} />
      <TouchableOpacity onPress={onPressSearch}>
        <SearchIcon
          source={require('../../../assets/icons/search.png')}
          height={height}
        />
      </TouchableOpacity>
    </Container>
  );
};
