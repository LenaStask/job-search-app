import React from 'react';
import { Center, Title } from '@mantine/core';

function NotFound() {
  return (
    <Center h={400} maw={800} mx="auto">
      <Title>
        Вы перешли на несуществующую страницу!
      </Title>
    </Center>
  );
}

export default NotFound;
