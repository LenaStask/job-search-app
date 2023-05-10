import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pagination as MantinePagination } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../store/vacancyListSlice';

function Pagination({ page }) {
  const dispatch = useDispatch();

  const onChangePage = useCallback((newPage) => {
    dispatch(setPage(newPage));
  }, [dispatch]);

  return (
    <MantinePagination
      total={15}
      position="center"
      color="#5E96FC"
      value={page}
      onChange={onChangePage}
    />
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Pagination;
