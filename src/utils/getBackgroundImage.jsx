export const getBackgroundImage = weather => {
  if (!weather) return require('../assets/images/error.jpeg'); // fallback image

  const condition = weather.weather[0].main.toLowerCase();

  if (condition.includes('cloud')) {
    return require('../assets/images/cloudy.png');
  } else if (condition.includes('clear')) {
    return require('../assets/images/sunny.png');
  } else if (condition.includes('rain')) {
    return require('../assets/images/rainy.png');
  } else {
    return require('../assets/images/snowy.png');
  }
};
