import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination as MantinePagination } from '@mantine/core';
import { setPage } from '../../store/slices/vacancySearchSlice';

function Pagination() {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state.vacancySearch);

  const onChangePage = useCallback((page) => {
    dispatch(setPage(page));
  }, [dispatch]);

  return (
    <MantinePagination
      total={Math.min(Math.ceil(pagination.total / pagination.count), 500)}
      position="center"
      value={pagination.page}
      onChange={onChangePage}
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundColor: theme.colors.brand,
          },
        },
      })}
    />
  );
}

export default Pagination;
