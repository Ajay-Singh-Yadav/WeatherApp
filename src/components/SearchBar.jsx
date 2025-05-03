import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getWeatherColors} from '../utils/weatherColors';

const SearchBar = ({query, onChangeText, onSearch, weather}) => {
  const {backgroundColor, textColor} = weather
    ? getWeatherColors(weather)
    : {backgroundColor: '#91B4C6', textColor: '#CAD7DF'};

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={[
          styles.container,
          {backgroundColor: backgroundColor, borderColor: backgroundColor},
        ]}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={textColor}
          style={[styles.input, {color: textColor}]}
          onChangeText={onChangeText}
          value={query}
        />
        <TouchableOpacity
          onPress={onSearch}
          style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}>
          <FontAwesome
            name="search"
            size={24}
            color="#333"
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 70,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    height: 50,
    borderWidth: 1,

    overflow: 'hidden',
  },
  input: {
    flex: 1,

    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  buttonContainer: {
    width: 80,
    height: 60,

    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    color: '#fff',
  },
});

export default SearchBar;
