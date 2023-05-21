/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import {
  Card, createStyles, Stack, Container,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVacancy } from '../../store/slices/vacancySlice';
import VacancyListItem from '../../components/vacancyListItem/VacancyListItem';

const useStyles = createStyles((theme) => ({
  card: {
    '&.title': {
      size: '28px',
      fw: '700',
      color: theme.colors.grayScale,
    },
  },
}));

function Vacancy() {
  const { classes } = useStyles();
  const { vacancy } = useSelector((state) => state.vacancy);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVacancy(id));
  }, []);

  if (vacancy) {
    return (
      <Container size="sm" className={classes.container}>
        <Stack mt={40}>
          <VacancyListItem vacancy={vacancy} className={classes.card} standalone />
          <Card radius="12px" withBorder maw={773}>
            <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
          </Card>
        </Stack>
      </Container>
    );
  }

  return (<div>Loading...</div>);
}

export default Vacancy;
