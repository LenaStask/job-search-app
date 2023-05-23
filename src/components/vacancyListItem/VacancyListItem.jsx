import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  createStyles,
  getStylesRef,
  ActionIcon,
  Card,
  Group,
  rem,
  Text,
  Title,
} from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import renderSalary from './salaryRenderer';
import vacancyPropTypes from './vacancyPropTypes';
import { toggleFavorite } from '../../store/slices/vacancyListSlice';
import locationImg from '../../assets/location.svg';

const useStyles = createStyles((theme) => ({
  vacancy: {
    marginBottom: `${rem(16)}`,
    height: '100%',
    border: `${rem(1)} solid ${theme.colors.grayScale[2]}`,
    borderRadius: rem(12),
  },
  title: {
    ref: getStylesRef('title'),
    whiteSpace: 'pre',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: rem(20),
    fontWeight: 600,
    color: theme.colors.brand,
  },
  iconStar: {
    color: theme.colors.grayScale[4],
    '&:hover': {
      color: theme.colors.brand,
    },
  },
  iconStarFilled: {
    color: theme.colors.brand[9],
  },
  salary: {
    ref: getStylesRef('salary'),
    fontSize: rem(16),
    fontWeight: 600,
  },
  typeOfWork: {
    ref: getStylesRef('typeOfWork'),
    fontSize: rem(16),
    fontWeight: 400,
  },
  dot: {
    fontSize: rem(20),
    fontWeight: 400,
    color: theme.colors.grayScale[5],
  },
  town: {
    fontSize: rem(16),
    fontWeight: 400,
  },
  standalone: {
    [`& .${getStylesRef('title')}`]: {
      fontSize: rem(28),
      fontWeight: 700,
      color: theme.colors.grayScale[6],
    },
    [`& .${getStylesRef('salary')}`]: {
      fontSize: rem(20),
      fontWeight: 700,
    },
    [`& .${getStylesRef('typeOfWork')}`]: {
      fontSize: rem(20),
    },
  },
}));

function VacancyListItem({ vacancy, standalone }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.vacancyList.favorites);

  const { classes, cx } = useStyles();

  const toggle = useCallback((id) => {
    dispatch(toggleFavorite(id));
  }, [toggleFavorite]);

  return (
    <Card
      className={cx(classes.vacancy, { [classes.standalone]: standalone })}
      padding={24}
    >
      <Group position="apart" noWrap="true">
        <Title className={classes.title}>
          {vacancy.profession}
        </Title>
        <ActionIcon
          data-elem={`vacancy-${vacancy.id}-shortlist-button`}
          onClick={(event) => {
            event.preventDefault();
            toggle(vacancy.id);
          }}
          variant="transparent"
        >
          {!favorites.includes(vacancy.id)
            ? <IconStar width={22} className={classes.iconStar} />
            : <IconStarFilled width={22} className={classes.iconStarFilled} /> }
        </ActionIcon>
      </Group>
      <Group spacing={12}>
        <Text className={classes.salary}>
          {renderSalary(vacancy.payment_from, vacancy.payment_to, vacancy.currency)}
        </Text>
        <Text className={classes.dot}>•</Text>
        <Text className={classes.typeOfWork}>{vacancy.type_of_work.title}</Text>
      </Group>
      <Group spacing={12}>
        <img src={locationImg} alt="Местоположение" />
        <Text className={classes.town}>{vacancy.town.title}</Text>
      </Group>
    </Card>
  );
}

VacancyListItem.propTypes = {
  vacancy: vacancyPropTypes.isRequired,
  standalone: PropTypes.bool,
};

VacancyListItem.defaultProps = {
  standalone: false,
};

export default VacancyListItem;
