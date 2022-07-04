import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '..';
import { FiSearch } from 'react-icons/fi';

export const SearchInput = ({ label, inputProps, onChange, ...rest }) => {
  return (
    <Box w="full" {...rest}>
      <FormLabel htmlFor="search-input" textAlign="left">
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          id="search-input"
          placeholder="Rechercher..."
          _placeholder={{
            color: 'white',
          }}
          _focus={{
            borderColor: 'gray.900',
          }}
          onChange={onChange}
          {...inputProps}
        />
        <InputRightElement>
          <Icon icon={FiSearch} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
