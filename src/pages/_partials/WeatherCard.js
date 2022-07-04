import { Box, Text, Image, Heading } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { calcTemp } from '../Weather/weather.service';

export const WeatherCard = ({ day }) => {
  return (
    <Box
      boxSize="20"
      boxShadow="lg"
      borderRadius="30%"
      w="180px"
      h=" 180px"
      backgroundColor="rgba(255, 255, 255, 0.3)"
      paddingBottom="10px"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Heading as="h1" marginTop="25px" fontSize="20px">
        {dayjs(day?.date).format('dddd')}
      </Heading>
      <Image src={`/assets/${day?.icon}.svg`} w="100px" h="100px" />
      <Text paddingBottom="10px" fontSize="0.93em">
        {calcTemp(day?.temp)}°C
      </Text>
    </Box>
  );
};
