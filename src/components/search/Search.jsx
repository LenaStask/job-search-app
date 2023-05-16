import React, { useCallback, useState } from 'react';
import {
  TextInput, useMantineTheme, Button,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../store/slices/searchSlice';

function Search() {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onSearch = useCallback((newValue) => {
    dispatch(setQuery(newValue));
  }, [dispatch]);

  return (
    <TextInput
      onChange={(e) => setValue(e.target.value)}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      placeholder="Введите название вакансии"
      styles={{ input: { fontSize: '14px' } }}
      size="md"
      rightSection={
        <Button size="xs" sx={{ backgroundColor: theme.colors.blueColor[0] }} variant="filled" radius="md" onClick={() => onSearch(value)}>Поиск</Button>
      }
      rightSectionWidth={88}
      radius="8px"
    />
  );
}

export default Search;
