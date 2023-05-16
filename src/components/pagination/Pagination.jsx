import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination as MantinePagination } from '@mantine/core';
import { setPage } from '../../store/slices/paginationSlice';

function Pagination() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.pagination);

  const onChangePage = useCallback((newPage) => {
    dispatch(setPage(newPage));
  }, [dispatch]);

  return (
    <MantinePagination
      total={15}
      position="center"
      value={page}
      onChange={onChangePage}
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundColor: theme.colors.blueColor[0],
          },
        },
      })}
    />
  );
}

export default Pagination;
