import React from 'react';
import './main.scss';
import {
  Container, createStyles,
} from '@mantine/core';
import VacancyList from '../../components/vacancyList/VacancyList';

const useStyles = createStyles(() => ({
  container: {
    background: '#F7F7F8',
  },
}));
function Main() {
  const { classes } = useStyles();
  return (
    <div className="container">
      <Container className={classes.container}>
        <VacancyList />
      </Container>
    </div>
  );
}

export default Main;
