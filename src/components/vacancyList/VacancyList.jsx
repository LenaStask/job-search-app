import React from 'react';
import PropTypes from 'prop-types';
import {
  LoadingOverlay, Box, Skeleton, Text, Image, Stack,
} from '@mantine/core';
import VacancyListItem from '../vacancyListItem/VacancyListItem';
import empty from '../../assets/empty.svg';

function VacancyList({ vacancies, isLoading }) {
  if (vacancies.length !== 0) {
    return (
      <Skeleton visible={isLoading}>
        <LoadingOverlay visible={isLoading} />
        {vacancies.map((vacancy) => (
          <Box
            component="a"
            href={`/vacancy/${vacancy.id}`}
            target="_blank"
            sx={() => ({
              textDecoration: 'none',
            })}
            key={vacancy.id}
          >
            <VacancyListItem vacancy={vacancy} />
          </Box>
        ))}
      </Skeleton>
    );
  }
  return (
    <Skeleton visible={isLoading}>
      <Stack maw={400} h={366} mx="auto" align="center" justify="center">
        <Image src={empty} alt="empty" width={240} />
        <Text fw={700} fz={24}>Упс, вакансии не найдены!</Text>
      </Stack>
    </Skeleton>
  );
}

VacancyList.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    profession: PropTypes.string,
    payment: PropTypes.string,
    payment_from: PropTypes.number,
    payment_to: PropTypes.number,
    currency: PropTypes.string,
    type_of_work: PropTypes.shape({
      title: PropTypes.string,
    }),
    town: PropTypes.shape({
      title: PropTypes.string,
    }),
  })),
  isLoading: PropTypes.bool,
};

VacancyList.defaultProps = {
  vacancies: [],
  isLoading: false,
};

export default VacancyList;
