import React, { useEffect } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancies } from '../../store/slices/vacancyListSlice';
import Vacancy from '../vacancy/Vacancy';

function VacancyList() {
  const { vacancies, isLoading } = useSelector((state) => state.vacancyList);
  const { page } = useSelector((state) => state.pagination);
  const { query } = useSelector((state) => state.search);
  const { filters } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVacancies());
  }, [page, query, filters]);

  return (
    <div style={{ marginBottom: '16px', minHeight: '392px', position: 'relative' }}>
      <LoadingOverlay visible={isLoading} />
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
}
export default VacancyList;
