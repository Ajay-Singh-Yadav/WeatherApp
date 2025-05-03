export const getWeatherColors = weather => {
  const condition = weather.weather[0].main.toLowerCase();

  switch (condition) {
    case 'clear':
      return {backgroundColor: '#FAE2BD', textColor: '#EFAA82'}; // clear
    case 'cloud':
      return {backgroundColor: '#5A8BAB', textColor: '#AED5E4'}; // cloudy
    case 'rain':
      return {backgroundColor: '#40666A', textColor: '#C9E8E0'}; // rain
    default:
      return {backgroundColor: '#99B8CC', textColor: '#E4F1F9'}; // snow
  }
};
