
import React, { useState } from 'react'
import {View, TextInput,StyleSheet} from 'react-native'
const Search = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (query) => {setSearch(query);}

  return (
    <View style={{...styles.container,...styles.shadow}}>
      <TextInput value={search} onChangeText={onChangeSearch} placeholder="Ara" style={styles.inputArea} />
    </View>
  );
};
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}
const styles = StyleSheet.create({
  shadow: elevationShadowStyle(20),
  container:{
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom:7,
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  inputArea:{
    fontSize: 18
  }
});
export default Search

// placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={search},

// onChangeText={onChangeSearch}