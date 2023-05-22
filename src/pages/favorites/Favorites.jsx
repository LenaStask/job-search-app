import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Stack, Image, Text, Container, Center, useMantineTheme,
} from '@mantine/core';
import { getFavorites } from '../../store/localStorage';
import { getVacancies } from '../../store/slices/vacancyListSlice';
import VacancyList from '../../components/vacancyList/VacancyList';
import Pagination from '../../components/pagination/Pagination';
import empty from '../../assets/empty.svg';

function Favorites() {
  const dispatch = useDispatch();
  const theme = useMantineTheme();

  const { vacancies, isLoading } = useSelector((state) => state.vacancyList);
  const [page, setPage] = useState(1);

  const favorites = getFavorites();

  useEffect(() => {
    dispatch(getVacancies({
      ids: favorites,
      page: page - 1,
    }));
  }, [page]);

  if (favorites.length === 0) {
    return (
      <Center style={{ height: 600 }}>
        <Stack maw={400} h={366} mx="auto" align="center" justify="center">
          <Image src={empty} alt="empty" width={240} />
          <Text fw={700} fz={24}>Упс, здесь еще ничего нет!</Text>
          <Button
            sx={{ backgroundColor: theme.colors.brand, marginTop: '20px' }}
            radius="md"
            component="a"
            href="/"
          >
            Поиск Вакансий
          </Button>
        </Stack>
      </Center>
    );
  }

  return (
    <Container size="sm">
      <Stack>
        <VacancyList vacancies={vacancies.objects} isLoading={isLoading} />
        <Pagination page={page} total={vacancies.totalPages} onChange={setPage} />
      </Stack>
    </Container>
  );
}

export default Favorites;
