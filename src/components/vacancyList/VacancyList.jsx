import React, { useEffect } from 'react';
import {
  Grid, Stack, Skeleton, LoadingOverlay,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../search/Search';
import { getVacancies } from '../../store/vacancyListSlice';
import Vacancy from '../vacancy/Vacancy';
import Pagination from '../UI/pagination/Pagination';
import Filters from '../filters/Filters';

function VacancyList() {
  const {
    vacancies, page, query, isLoading, filters,
  } = useSelector((state) => state.vacancyList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVacancies());
  }, [page, query, filters]);

  return (
    <Grid columns={12}>
      <Grid.Col sm={4}>
        <Stack>
          <Filters />
          <Skeleton />
        </Stack>
      </Grid.Col>
      <Grid.Col sm={8}>
        <Stack>
          <Search />
          <div>
            <div style={{ marginBottom: '8px', minHeight: '392px', position: 'relative' }}>
              <LoadingOverlay visible={isLoading} />
              {vacancies.map((vacancy) => (
                <Vacancy key={vacancy.id} profession={vacancy.profession} />
              ))}
            </div>
            <Pagination page={page} />
          </div>
          <Skeleton />
          <Skeleton />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
export default VacancyList;
