import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { setQuery } from '../../store/slices/vacancySearchSlice';

function Search({ onSearch }) {
  const dispatch = useDispatch();

  const handleChange = useCallback((query) => {
    dispatch(setQuery(query));
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  }, [onSearch]);

  return (
    <TextInput
      data-elem="search-input"
      onChange={(event) => handleChange(event.target.value)}
      onKeyDown={handleKeyDown}
      icon={<IconSearch size={16} stroke={1.5} />}
      placeholder="Введите название вакансии"
      size="lg"
      rightSection={(
        <Button
          data-elem="search-button"
          onClick={onSearch}
          size="xs"
          variant="filled"
        >
          Поиск
        </Button>
      )}
      rightSectionWidth={88}
      mb={16}
    />
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
