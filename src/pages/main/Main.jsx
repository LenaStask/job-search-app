import React from 'react';
import './main.scss';
import {
  Container, Grid, Stack, Skeleton,
} from '@mantine/core';
import Search from '../../components/search/Search';

function Main() {
  return (
    <Container my="md">
      <Grid columns={24}>
        <Grid.Col span={8}>
          <Stack>
            <Skeleton />
            <Skeleton />
          </Stack>
        </Grid.Col>
        <Grid.Col span={16}>
          <Stack>
            <Search />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Main;
