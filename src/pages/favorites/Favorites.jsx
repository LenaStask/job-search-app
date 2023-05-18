import React from 'react';
import {
  Button, Stack, Image, Text, Container, Center,
} from '@mantine/core';
import empty from '../../assets/empty.svg';

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('ids') || '[]');
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
          Vacancies
        </Stack>
      </Center>
    </Container>
  );
}

export default Favorites;
