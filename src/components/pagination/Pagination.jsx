import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as MantinePagination } from '@mantine/core';

function Pagination({ page, total, onChange }) {
  return (
    <MantinePagination
      value={page}
      total={total}
      onChange={onChange}
      position="center"
      mt={40}
      styles={(theme) => ({
        control: {
          color: theme.colors.grayScale[6],
          '&[data-active]': {
            backgroundColor: theme.colors.brand,
          },
        },
      })}
    />
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
