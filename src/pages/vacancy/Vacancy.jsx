/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  createStyles,
  rem,
  Card,
  Center,
  Container,
  Loader,
  Stack,
} from '@mantine/core';
import { getVacancy, reset } from '../../store/slices/vacancySlice';
import VacancyListItem from '../../components/vacancyListItem/VacancyListItem';

const useStyles = createStyles((theme) => ({
  card: {
    '&.title': {
      size: rem(28),
      fw: 700,
      color: theme.colors.grayScale,
    },
  },
  information: {
    border: ` ${rem(1)} solid ${theme.colors.grayScale[2]}`,
    borderRadius: rem(12),
    maxWidth: rem(773),
  },
}));

function Vacancy() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { vacancy } = useSelector((state) => state.vacancy);

  const { classes } = useStyles();

  useEffect(() => {
    dispatch(getVacancy(id));

    return () => dispatch(reset());
  }, []);

  if (!vacancy) {
    return (
      <Center h={400} maw={400} mx="auto">
        <Loader />
      </Center>
    );
  }

  return (
    <Container size="sm" className={classes.container}>
      <Stack spacing={0}>
        <VacancyListItem vacancy={vacancy} className={classes.card} standalone />
        <Card className={classes.information}>
          <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
        </Card>
      </Stack>
    </Container>
  );
}

export default Vacancy;
