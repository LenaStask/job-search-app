import React, { useCallback, useState } from 'react';
import {
  TextInput, useMantineTheme, Button,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../store/vacancyListSlice';

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
      rightSection={
        <Button compact size="xs" sx={{ backgroundColor: theme.colors.blueColor[0] }} variant="filled" onClick={() => onSearch(value)}>Поиск</Button>
      }
      rightSectionWidth={88}
      radius="8px"
    />
  );
}

export default Search;
