import React from 'react';
import {
  Container, Grid, Stack, Skeleton,
} from '@mantine/core';
import Search from '../../components/search/Search';
import Filters from '../../components/filters/Filters';
import VacancyList from '../../components/vacancyList/VacancyList';

function Main() {
  return (
    <div className="container">
      <Container mt={40}>
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
              <VacancyList />
              <Skeleton />
              <Skeleton />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
