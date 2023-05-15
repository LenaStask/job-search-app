import React from 'react';
import {
  Card, Group, Title, ActionIcon, createStyles, Stack, Center, Container,
} from '@mantine/core';
import star from '../../assets/star.svg';

const useStyles = createStyles(() => ({
  container: {
    height: '100vh',
  },
  title: {
    whiteSpace: 'pre',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

function Vacancy() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container} size={773}>
      <Center mx="auto">
        <Stack mt={40}>
          <Card radius="12px" withBorder>
            <Group position="apart">
              <Title className={classes.title} size={28}>Title</Title>
              <ActionIcon>
                <a className="header__logo-image" href="/#">
                  <img src={star} alt="icon" />
                </a>
              </ActionIcon>
            </Group>
          </Card>
          <Card radius="12px" withBorder>
            Description
          </Card>
        </Stack>
      </Center>
    </Container>
  );
}

export default Vacancy;
