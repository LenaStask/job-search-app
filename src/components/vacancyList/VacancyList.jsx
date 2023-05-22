import React from 'react';
import PropTypes from 'prop-types';
import { LoadingOverlay, Box, Skeleton } from '@mantine/core';
import VacancyListItem from '../vacancyListItem/VacancyListItem';

function VacancyList({ vacancies, isLoading }) {
  return (
    <Skeleton visible={isLoading}>
      <LoadingOverlay visible={isLoading} />
      {vacancies.map((vacancy) => (
        <Box
          component="a"
          href={`/vacancy/${vacancy.id}`}
          target="_blank"
          sx={() => ({
            textDecoration: 'none',
          })}
          key={vacancy.id}
        >
          <VacancyListItem vacancy={vacancy} />
        </Box>
      ))}
    </Skeleton>
  );
}

VacancyList.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    profession: PropTypes.string,
    payment: PropTypes.string,
    payment_from: PropTypes.number,
    payment_to: PropTypes.number,
    currency: PropTypes.string,
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
