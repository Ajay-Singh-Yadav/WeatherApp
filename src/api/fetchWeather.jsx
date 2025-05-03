import axios from 'axios';

const API_KEY = 'ee39905ed372a7b63bf884b360445b49';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async city => {
  const url = `${BASE_URL}?appid=${API_KEY}&q=${city}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Error fetching weather:', error);
    return null; // in case of error
  }
};
