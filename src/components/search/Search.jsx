import React from 'react';
import {
  TextInput, useMantineTheme, Button,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Search() {
  const theme = useMantineTheme();
  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      placeholder="Введите название вакансии"
      rightSection={
        <Button compact size="xs" color={theme.primaryColor} variant="filled">Поиск</Button>
      }
      rightSectionWidth={88}
    />
  );
}

export default Search;
