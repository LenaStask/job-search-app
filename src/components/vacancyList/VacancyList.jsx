import React from 'react';
import PropTypes from 'prop-types';
import { LoadingOverlay, Box } from '@mantine/core';
import VacancyListItem from '../vacancyListItem/VacancyListItem';

function VacancyList({ vacancies, isLoading }) {
  return (
    <div style={{ marginBottom: '16px', minHeight: '392px', position: 'relative' }}>
      <LoadingOverlay visible={isLoading} />
      {vacancies.map((vacancy) => (
        <Box
          component="a"
          href={`/vacancy/${vacancy.id}`}
          target="_blank"
          sx={() => ({
            textDecoration: 'none',
          })}
        >
          <VacancyListItem key={vacancy.id} vacancy={vacancy} />
        </Box>
      ))}
    </div>
  );
}

VacancyList.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    profession: PropTypes.string,
    payment_from: PropTypes.number,
    type_of_work: PropTypes.shape({
      title: PropTypes.string,
    }),
    town: PropTypes.shape({
      title: PropTypes.string,
    }),
  })),
  isLoading: PropTypes.bool,
};

VacancyList.defaultProps = {
  vacancies: [],
  isLoading: false,
};

export default VacancyList;
