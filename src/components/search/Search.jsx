import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMantineTheme, TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { setQuery } from '../../store/slices/searchSlice';

function Search() {
  const dispatch = useDispatch();

  const theme = useMantineTheme();
  const [value, setValue] = useState('');

  const onSearch = useCallback((query) => {
    dispatch(setQuery(query));
  }, [dispatch]);

  return (
    <TextInput
      onChange={(event) => setValue(event.target.value)}
      icon={<IconSearch size={16} stroke={1.5} />}
      placeholder="Введите название вакансии"
      styles={{ input: { fontSize: 14 } }}
      size="lg"
      rightSection={(
        <Button
          onClick={() => onSearch({ value })}
          size="xs"
          sx={{ backgroundColor: theme.colors.blueColor[0] }}
          variant="filled"
          radius="md"
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
