import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {fetchWeather} from '../api/fetchWeather';
import {getBackgroundImage} from '../utils/getBackgroundImage';
import SearchBar from '../components/SearchBar';
import {getWeatherColors} from '../utils/weatherColors';
import {getWeatherIcon} from '../utils/getWeatherIcon';
import HourlyTemp from '../components/HourlyTemp';
const HomeScreen = () => {
  const [query, setQuery] = useState('Amritsar'); // Default city
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    handleSearch(); // Load default city weather on mount
  }, []);

  const handleSearch = async () => {
    if (!query) return;
    const result = await fetchWeather(query);
    setWeather(result);
  };

  const backgroundImage = getBackgroundImage(weather);

  const {icon, width, height} = weather
    ? getWeatherIcon(weather)
    : {
        icon: require('../assets/images/error.jpeg'),
        width: 120,
        height: 120,
      };

  const {backgroundColor, textColor} = weather
    ? getWeatherColors(weather)
    : {backgroundColor: '#91B4C6', textColor: '#CAD7DF'};

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />

      <SearchBar
        query={query}
        onChangeText={setQuery}
        onSearch={handleSearch}
        weather={weather}
      />

      {/* Card View */}
      {weather && (
        <View style={[styles.CardView, {backgroundColor}]}>
          <Text style={[styles.cardText, {color: textColor}]}>Today</Text>
          <View style={[styles.tempContainer]}>
            <View style={styles.iconContainer}>
              <Image source={icon} style={[styles.icon, {width, height}]} />
            </View>
            <Text style={[styles.temp, {color: textColor}]}>
              {Math.round(weather.main.temp)}°C
            </Text>
          </View>
          <Text style={[styles.weatherStatus, {color: textColor}]}>
            {weather.weather[0].description}
          </Text>
          <Text style={[styles.cityName, {color: textColor}]}>
            {weather.name}
          </Text>
          <Text style={[styles.cityName, {color: textColor}]}>
            {new Date().toLocaleDateString(undefined, {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <View style={[styles.cardBottomContainer, {color: textColor}]}>
            <Text style={[styles.feelsLike, {color: textColor}]}>
              feels Like {weather.main.feels_like}
            </Text>
            <Text style={[styles.feelsLike, {color: textColor}]}>|</Text>
            <Text style={[styles.sunset, {color: textColor}]}>
              Sunset:{' '}
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}{' '}
            </Text>
          </View>
        </View>
      )}
      {/* End of Card View */}

      <HourlyTemp weather={weather} />
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchContainer: {},
  CardView: {
    // backgroundColor: '#FAE2BD',
    width: 450,
    height: 500,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 10,
    elevation: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#EFAA82',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 157,
    height: 150,
    // borderWidth: 1,
  },
  icon: {
    alignSelf: 'center',

    // borderWidth: 1,
  },
  temp: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#EFAA82',
  },
  weatherStatus: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#EFAA82',
  },
  cityName: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginTop: 20,
    color: '#EFAA82',
  },
  feelsLike: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginTop: 20,
    color: '#EFAA82',
    marginRight: 20,
  },
  sunset: {
    fontSize: 20,
    // fontWeight: 'bold',
    marginTop: 20,
    color: '#EFAA82',
  },
  cardBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
