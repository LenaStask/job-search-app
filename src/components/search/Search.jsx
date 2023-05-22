import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { setQuery } from '../../store/slices/vacancySearchSlice';

function Search() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const onSearch = useCallback((query) => {
    dispatch(setQuery(query));
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      onSearch(value);
    }
  }, [value]);

  return (
    <TextInput
      data-elem="search-input"
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={handleKeyDown}
      icon={<IconSearch size={16} stroke={1.5} />}
      placeholder="Введите название вакансии"
      size="lg"
      rightSection={(
        <Button
          data-elem="search-button"
          onClick={() => onSearch(value)}
          size="xs"
          variant="filled"
        >
          Поиск
        </Button>
      )}
      rightSectionWidth={88}
    />
  );
}

export default Search;
