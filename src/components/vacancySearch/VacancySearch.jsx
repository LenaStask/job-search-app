import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mantine/core';
import { getVacancies } from '../../store/slices/vacancyListSlice';
import { setPage } from '../../store/slices/vacancySearchSlice';
import Filters from '../filters/Filters';
import Search from '../search/Search';
import VacancyList from '../vacancyList/VacancyList';
import Pagination from '../pagination/Pagination';

function VacancySearch() {
  const dispatch = useDispatch();

  const { vacancies, isLoading } = useSelector((state) => state.vacancyList);
  const { filters, search, page } = useSelector((state) => state.vacancySearch);

  useEffect(() => {
    dispatch(getVacancies({
      keyword: search.query,
      catalogues: filters.catalogue,
      payment_from: filters.paymentFrom,
      payment_to: filters.paymentTo,
      page: page - 1,
    }));
  }, [filters, search, page]);

  return (
    <Container mt={40}>
      <Grid columns={12}>
        <Grid.Col sm={4}>
          <Filters />
        </Grid.Col>
        <Grid.Col sm={8}>
          <Search />
          <VacancyList vacancies={vacancies.objects} isLoading={isLoading} />
          <Pagination
            page={page}
            total={vacancies.totalPages}
            onChange={(p) => dispatch(setPage(p))}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default VacancySearch;
