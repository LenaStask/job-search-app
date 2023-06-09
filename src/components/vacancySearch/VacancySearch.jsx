import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mantine/core';
import { getVacancies, reset as resetVacancyList } from '../../store/slices/vacancyListSlice';
import { setPage } from '../../store/slices/vacancySearchSlice';
import Filters from '../filters/Filters';
import Search from '../search/Search';
import VacancyList from '../vacancyList/VacancyList';
import Pagination from '../pagination/Pagination';

function VacancySearch() {
  const dispatch = useDispatch();

  const { vacancies, isLoading } = useSelector((state) => state.vacancyList);
  const { filters, query, page } = useSelector((state) => state.vacancySearch);

  const setPageAndSearch = (p) => {
    dispatch(setPage(p));

    dispatch(getVacancies({
      keyword: query,
      catalogues: filters.catalogue,
      payment_from: filters.paymentFrom,
      payment_to: filters.paymentTo,
      page: p - 1,
    }));
  };

  const refresh = () => {
    setPageAndSearch(1);
  };

  useEffect(() => {
    refresh();

    return () => {
      dispatch(resetVacancyList());
    };
  }, []);

  return (
    <Grid columns={12}>
      <Grid.Col sm={4}>
        <Filters onFilter={refresh} />
      </Grid.Col>
      <Grid.Col sm={8}>
        <Search onSearch={refresh} />
        <VacancyList vacancies={vacancies.objects} isLoading={isLoading} />
        <Pagination
          page={page}
          total={vacancies.totalPages}
          onChange={(p) => setPageAndSearch(p)}
        />
      </Grid.Col>
    </Grid>
  );
}

export default VacancySearch;
