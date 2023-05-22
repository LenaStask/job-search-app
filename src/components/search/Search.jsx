import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, Button, useMantineTheme } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { setQuery } from '../../store/slices/vacancySearchSlice';

function Search() {
  const dispatch = useDispatch();
  const theme = useMantineTheme();

  const [value, setValue] = useState('');

  const onSearch = useCallback(() => {
    dispatch(setQuery(value));
  }, [value]);

  return (
    <TextInput
      onChange={(event) => setValue(event.target.value)}
      icon={<IconSearch size={16} stroke={1.5} />}
      placeholder="Введите название вакансии"
      styles={{ input: { fontSize: 14, borderColor: theme.colors.grayScale[2] } }}
      size="lg"
      rightSection={(
        <Button
          onClick={onSearch}
          size="xs"
          variant="filled"
          radius="md"
          sx={{ backgroundColor: theme.colors.brand }}
        >
          Поиск
        </Button>
      )}
      rightSectionWidth={88}
      radius={8}
    />
  );
}

export default Search;
