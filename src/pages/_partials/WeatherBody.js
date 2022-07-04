import { HStack } from '@chakra-ui/react';

export const WeatherBody = props => {
  return (
    <HStack
      w="800px"
      top="-25px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      {...props}
    />
  );
};
