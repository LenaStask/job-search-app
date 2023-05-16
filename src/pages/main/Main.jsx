import React from 'react';
import { Container, Grid } from '@mantine/core';
import Filters from '../../components/filters/Filters';
import Search from '../../components/search/Search';
import VacancyList from '../../components/vacancyList/VacancyList';
import Pagination from '../../components/pagination/Pagination';

function Main() {
  return (
    <Container mt={40}>
      <Grid columns={12}>
        <Grid.Col sm={4}>
          <Filters />
        </Grid.Col>
        <Grid.Col sm={8}>
          <Search />
          <VacancyList />
          <Pagination />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Main;
