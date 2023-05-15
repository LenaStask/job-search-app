import React, { useEffect } from 'react';
import {
  LoadingOverlay,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancies } from '../../store/slices/vacancyListSlice';
import Vacancy from '../vacancy/Vacancy';
import Pagination from '../UI/pagination/Pagination';

function VacancyList() {
  const {
    vacancies, page, isLoading,
  } = useSelector((state) => state.vacancyList);
  const { query } = useSelector((state) => state.search);
  const { filters } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVacancies());
  }, [page, query, filters]);

  return (
    <div>
      <div style={{ marginBottom: '8px', minHeight: '392px', position: 'relative' }}>
        <LoadingOverlay visible={isLoading} />
        {vacancies.map((vacancy) => (
          <Vacancy key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
}
export default VacancyList;
