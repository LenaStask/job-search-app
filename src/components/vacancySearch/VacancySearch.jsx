import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mantine/core';
import Filters from '../filters/Filters';
import Search from '../search/Search';
import VacancyList from '../vacancyList/VacancyList';
import Pagination from '../pagination/Pagination';
import { getVacancies } from '../../store/slices/vacancySearchSlice';

function VacancySearch() {
  const dispatch = useDispatch();

  const {
    filters,
    search,
    vacancies,
    pagination,
    isLoading,
  } = useSelector((state) => state.vacancySearch);

  useEffect(() => {
    dispatch(getVacancies());
  }, [filters, search, pagination.page]);

  return (
    <Container mt={40}>
      <Grid columns={12}>
        <Grid.Col sm={4}>
          <Filters />
        </Grid.Col>
        <Grid.Col sm={8}>
          <Search />
          <VacancyList vacancies={vacancies} isLoading={isLoading} />
          <Pagination />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default VacancySearch;
