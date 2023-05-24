import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  LoadingOverlay,
  Stack,
  Text,
} from '@mantine/core';
import VacancyListItem from '../vacancyListItem/VacancyListItem';
import vacancyPropTypes from '../vacancyListItem/vacancyPropTypes';
import emptyImg from '../../assets/empty.svg';

function VacancyList({ vacancies, isLoading }) {
  if (vacancies.length === 0 && !isLoading) {
    return (
      <Stack h={280} maw={400} mt={16} mx="auto" align="center" justify="space-between">
        <Image src={emptyImg} alt="Упс" width={240} />
        <Text fw={700} fz={20}>Упс, вакансии не найдены!</Text>
      </Stack>
    );
  }

  return (
    <Box mih={280} pos="relative">
      <LoadingOverlay visible={isLoading} transitionDuration={250} />
      {vacancies.map((vacancy) => (
        <Box
          data-elem={`vacancy-${vacancy.id}`}
          key={vacancy.id}
          component={Link}
          to={`/vacancy/${vacancy.id}`}
          td="none"
        >
          <VacancyListItem vacancy={vacancy} />
        </Box>
      ))}
    </Box>
  );
}

VacancyList.propTypes = {
  vacancies: PropTypes.arrayOf(vacancyPropTypes),
  isLoading: PropTypes.bool,
};

VacancyList.defaultProps = {
  vacancies: [],
  isLoading: false,
};

export default VacancyList;
