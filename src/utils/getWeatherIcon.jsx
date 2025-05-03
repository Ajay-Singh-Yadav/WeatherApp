export const getWeatherIcon = weather => {
  const condition = weather.weather[0].main.toLowerCase();

  if (condition.includes('cloud')) {
    return {
      icon: require('../assets/images/cloudyIcon.png'),
      width: 130,
      height: 100,
    };
  } else if (condition.includes('clear')) {
    return {
      icon: require('../assets/images/sunIcon.png'),
      width: 100,
      height: 100,
    };
  } else if (condition.includes('rain')) {
    return {
      icon: require('../assets/images/rainIcon.png'),
      width: 130,
      height: 100,
    };
  } else {
    return {
      icon: require('../assets/images/cloudyIcon.png'),
      width: 130,
      height: 100,
    };
  }
};
