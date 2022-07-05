import React, { useState } from 'react';
import {
  Text,
  VStack,
  Heading,
  HStack,
  Flex,
  Image,
  Stack,
  Spinner,
} from '@chakra-ui/react';
import { SearchInput } from '../../components';
import { WeatherContainer } from '../_partials/WeatherContainer';
import { WeatherBody } from '../_partials/WeatherBody';
import { calcTemp, useGetWeather } from './weather.service';
import { useDebounce } from '../../utils/debounce';
import { WeatherCard } from '../_partials/WeatherCard';

const Weather = () => {
  //Declare state
  const [city, setCity] = useState('');
  const debouncedCity = useDebounce(city, 500);
  const { data, isFetching } = useGetWeather({ city: debouncedCity });
  const { days, city: apiCity } = data || {};

  return (
    <Flex
      textAlign="center"
      fontSize="xl"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgImage="/sky.jpg"
    >
      <VStack spacing={8} w="980px" mb="6%">
        <SearchInput onChange={event => setCity(event.target.value)} />
        <WeatherContainer>
             {/* To render weather main information id data exist and isFetching false (user completed capturing the city) */}
          <WeatherBody alignSelf="center">
            {isFetching && <Spinner />}
            {!data && !isFetching && !debouncedCity && (
              <Text>Please enter a city to get the weather forecast.</Text>
            )}
            {!data && !isFetching && debouncedCity && (
              <Text>
                No weather forecast found for "{debouncedCity}". Please try
                again.
              </Text>
            )}
            {data && !isFetching && (
              <HStack w="full" spacing="4rem">
                <Image
                  src={`/assets/${days?.[0]?.icon ?? '01d'}.svg`}
                  boxSize="20rem"
                  transition="visibility 2s ease-out"
                />
                <Stack w="full" justifyContent="flex-start" textAlign="left">
                  <Text color="gray.800" fontWeight="semibold">
                    Today
                  </Text>
                  <Heading>{apiCity}</Heading>
                  <Text>
                    Temperature: {calcTemp(days?.[0]?.temp)}
                    °C
                  </Text>
                </Stack>
              </HStack>
            )}
          </WeatherBody>
          {/* To render weather box information id data exist and isFetching false (user completed capturing the city) */}
          {data && !isFetching && (
            <HStack
              spacing="8"
              justify="center"
              position="absolute"
              bottom="-5.5rem"
              left="0"
              right="0"
            >
              {days?.slice(1, 5).map(day => (
                <WeatherCard key={day.date} day={day} />
              ))}
            </HStack>
          )}
        </WeatherContainer>
      </VStack>
    </Flex>
  );
};

export default Weather;
