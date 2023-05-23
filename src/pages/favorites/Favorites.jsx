import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Center,
  Container,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { getVacancies, reset as resetVacancyList } from '../../store/slices/vacancyListSlice';
import VacancyList from '../../components/vacancyList/VacancyList';
import Pagination from '../../components/pagination/Pagination';
import emptyImg from '../../assets/empty.svg';

function Favorites() {
  const dispatch = useDispatch();

  const { vacancies, isLoading, favorites } = useSelector((state) => state.vacancyList);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getVacancies({
      ids: favorites,
      page: page - 1,
    }));
  }, [page]);

  useEffect(() => () => {
    dispatch(resetVacancyList());
  }, []);

  if (favorites.length === 0) {
    return (
      <Center h={400}>
        <Stack maw={400} mx="auto" align="center" justify="center">
          <Image src={emptyImg} alt="Упс" width={240} />
          <Text fw={700} fz={24}>Упс, здесь еще ничего нет!</Text>
          <Button component="a" href="/" mt={20} radius="md">
            Поиск Вакансий
          </Button>
        </Stack>
      </Center>
    );
  }

  return (
    <Container size="sm">
      <VacancyList vacancies={vacancies.objects} isLoading={isLoading} />
      <Pagination page={page} total={vacancies.totalPages} onChange={setPage} />
    </Container>
  );
}

export default Favorites;
