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

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
