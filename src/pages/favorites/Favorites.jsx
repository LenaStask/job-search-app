import React from 'react';
import {
  Button, Stack, Image, Text, Container, Center,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import VacancyList from '../../components/vacancyList/VacancyList';
import Pagination from '../../components/pagination/Pagination';
import empty from '../../assets/empty.svg';

function Favorites() {
  const { favorites, vacancies, isLoading } = useSelector((state) => state.vacancySearch);

  const favoriteVacancies = vacancies.filter((vacancy) => favorites.includes(vacancy.id));

  if (favorites.length === 0) {
    return (
      <Stack maw={400} h={366} mx="auto" align="center" justify="center">
        <Image src={empty} alt="empty" width={240} />
        <Text fw={700} fz={24}>Упс, здесь еще ничего нет!</Text>
        <Button
          radius="md"
        >
          Поиск Вакансий
        </Button>
      </Stack>
    );
  }
  return (
    <Container>
      <Center>
        <Stack>
          <VacancyList vacancies={favoriteVacancies} isLoading={isLoading} />
          <Pagination />
        </Stack>
      </Center>
    </Container>
  );
}

export default Favorites;
