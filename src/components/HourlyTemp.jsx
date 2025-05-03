import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import {getWeatherColors} from '../utils/weatherColors';

const HourlyTemp = ({weather}) => {
  const {backgroundColor, textColor} = weather
    ? getWeatherColors(weather)
    : {backgroundColor: '#91B4C6', textColor: '#CAD7DF'};

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor, borderColor: backgroundColor},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    width: 450,
    height: 250,
    borderRadius: 25,
    elevation: 10,
  },
});

export default HourlyTemp;
