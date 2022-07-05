import axios from 'axios';
import { useQuery } from 'react-query';

// Returns array with Indices of the next five days in the list
// From the API data (every day at 12:00 pm)
const getDayIndices = data => {
  let dayIndices = [];
  dayIndices.push(0);

  let index = 0;
  let tmp = data.list[index].dt_txt.slice(8, 10);

  for (let i = 0; i < 4; i++) {
    while (
      tmp === data.list[index].dt_txt.slice(8, 10) ||
      data.list[index].dt_txt.slice(11, 13) !== '15'
    ) {
      index++;
    }
    dayIndices.push(index);
    tmp = data.list[index].dt_txt.slice(8, 10);
  }
  return dayIndices;
};

// creates the day objects and updates the state
const dataMapper = data => {
  const city = data.city.name;
  const days = [];
  const dayIndices = getDayIndices(data);

  for (let i = 0; i < 5; i++) {
    days.push({
      date: data.list[dayIndices[i]].dt_txt,
      weather_desc: data.list[dayIndices[i]].weather[0].description,
      icon: data.list[dayIndices[i]].weather[0].icon,
      temp: data.list[dayIndices[i]].main.temp,
    });
  }

  return {
    city,
    days,
  };
};

//Get Weather from API
export const useGetWeather = ({ city }, config) => {
  return useQuery(
    ['weather', { city }],
    async () => {
      const data = await axios.get(
        `/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
      );
      if (data) {
        return dataMapper(data);
      }
      return {
        city: undefined,
        days: undefined,
      };
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
      ...config,
    }
  );
};

//Temperature Calculation
export const calcTemp = temp => (temp ? Math.round(temp - 273.15) : 0);
