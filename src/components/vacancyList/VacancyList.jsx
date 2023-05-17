import React from 'react';
import PropTypes from 'prop-types';
import { LoadingOverlay } from '@mantine/core';
import VacancyListItem from '../vacancyListItem/VacancyListItem';

function VacancyList({ vacancies, isLoading }) {
  return (
    <div style={{ marginBottom: '16px', minHeight: '392px', position: 'relative' }}>
      <LoadingOverlay visible={isLoading} />
      {vacancies.map((vacancy) => (
        <VacancyListItem key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
}

VacancyList.propTypes = {
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profession: PropTypes.string,
      payment_from: PropTypes.number,
      type_of_work: PropTypes.shape({
        title: PropTypes.string,
      }),
      town: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default VacancyList;
