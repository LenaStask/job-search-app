import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ActionIcon, Card, Title, rem, createStyles, Text, Group, useMantineTheme,
} from '@mantine/core';
import PropTypes from 'prop-types';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import location from '../../assets/location.svg';
import { toggleFavorite } from '../../store/slices/vacancyListSlice';

const useStyles = createStyles(() => ({
  vacancy: {
    margin: '8px 0',
    height: '100%',
  },
  title: {
    whiteSpace: 'pre',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

function VacancyListItem({ vacancy }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.vacancyList.favorites);

  const toggle = useCallback((id) => {
    dispatch(toggleFavorite(id));
  }, [dispatch]);

  return (
    <Card
      className={classes.vacancy}
      padding="24px"
      style={{ margin: '16px 0' }}
      withBorder
      radius="12px"
      component="a"
      href={`/vacancy/${vacancy.id}`}
      target="_blank"
    >
      <Group position="apart" noWrap="true">
        <Title
          className={classes.title}
          size={rem(20)}
          fw={600}
          sx={{ color: theme.colors.brand }}
        >
          {vacancy.profession}
        </Title>
        <ActionIcon
          onClick={(event) => { event.preventDefault(); toggle(vacancy.id); }}
          variant="transparent"
          sx={() => ({
            '&:hover': {
              color: theme.colors.brand,
            },
          })}
        >
          {!favorites.includes(vacancy.id)
            ? <IconStar width={22} />
            : <IconStarFilled width={22} style={{ color: theme.colors.brand[9] }} /> }
        </ActionIcon>
      </Group>
      <Group spacing={12}>
        <Text fw={600} fz={16}>
          з/п от
          {' '}
          {vacancy.payment_from}
          {' '}
          rub
        </Text>
        <Text fw={400} fz={20} c="#7B7C88">•</Text>
        <Text fw={400} fz={16}>{vacancy.type_of_work.title}</Text>
      </Group>
      <Group spacing={12}>
        <img src={location} alt="location" />
        <Text fw={400} fz={16}>{vacancy.town.title}</Text>
      </Group>
    </Card>
  );
}

VacancyListItem.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.number,
    profession: PropTypes.string,
    payment_from: PropTypes.number,
    type_of_work: PropTypes.shape({
      title: PropTypes.string,
    }),
    town: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default VacancyListItem;
