import { Flex } from '@chakra-ui/react';

export const WeatherContainer = props => (
  <Flex
    position="relative"
    h="480px"
    w="full"
    boxShadow="xl"
    borderRadius="30px"
    backgroundColor="rgba(255, 255, 255, 0.2)"
    justify="center"
    {...props}
  />
);
