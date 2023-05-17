import React, { useEffect } from 'react';
import {
  Card, Text, Title, ActionIcon, createStyles, Stack, Center, Container, Group,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import star from '../../assets/star.svg';
import { getVacancy } from '../../store/slices/vacancySlice';
import location from '../../assets/location.svg';

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
  const { vacancy } = useSelector((state) => state.vacancy);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVacancy(id));
  }, []);

  if (vacancy) {
    return (
      <Container className={classes.container}>
        <Center mx="auto">
          <Stack mt={40}>
            <Card radius="12px" withBorder maw={773}>
              <Group position="apart" noWrap="true">
                <Title
                  className={classes.title}
                  size={28}
                  fw={700}
                >
                  {vacancy.profession}
                </Title>
                <ActionIcon variant="transparent">
                  <div className="header__logo-image" href="/#">
                    <img src={star} alt="icon" />
                  </div>
                </ActionIcon>
              </Group>
              <Group className="card__content" spacing={12}>
                <Text fw={700} fz={20}>
                  з/п от
                  {' '}
                  {vacancy.payment_from}
                  {' '}
                  rub
                </Text>
                <Text fw={400} fz={20} c="#7B7C88">•</Text>
                <Text fw={400} fz={20}>{vacancy.type_of_work.title}</Text>
              </Group>
              <Group className="card__location" spacing={12}>
                <img src={location} alt="location" />
                <Text fw={400} fz={16}>{vacancy.town.title}</Text>
              </Group>
            </Card>
            <Card radius="12px" withBorder maw={773}>
              {vacancy.vacancyRichText}
            </Card>
          </Stack>
        </Center>
      </Container>
    );
  }

  return (<div>Loading...</div>);
}

export default Vacancy;
