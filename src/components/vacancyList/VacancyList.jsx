import React, { useEffect } from 'react';
import {
  LoadingOverlay,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancies } from '../../store/vacancyListSlice';
import Vacancy from '../vacancy/Vacancy';
import Pagination from '../UI/pagination/Pagination';

function VacancyList() {
  const {
    vacancies, page, query, isLoading, filters,
  } = useSelector((state) => state.vacancyList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVacancies());
  }, [page, query, filters]);

  return (
    <div>
      <div style={{ marginBottom: '8px', minHeight: '392px', position: 'relative' }}>
        <LoadingOverlay visible={isLoading} />
        {vacancies.map((vacancy) => (
          <Vacancy key={vacancy.id} profession={vacancy.profession} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
}
export default VacancyList;
