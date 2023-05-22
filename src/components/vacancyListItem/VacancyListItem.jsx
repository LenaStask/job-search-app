import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ActionIcon, Card, Title, getStylesRef, createStyles, Text, Group, useMantineTheme,
} from '@mantine/core';
import PropTypes from 'prop-types';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import location from '../../assets/location.svg';
import { toggleFavorite } from '../../store/slices/vacancyListSlice';

const useStyles = createStyles((theme) => ({
  vacancy: {
    margin: '8px 0',
    height: '100%',
  },
  title: {
    ref: getStylesRef('title'),
    whiteSpace: 'pre',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 20,
    fontWeight: 600,
    color: theme.colors.brand,
  },
  salary: {
    ref: getStylesRef('salary'),
    fontSize: 16,
    fontWeight: 600,
  },
  typeOfWork: {
    ref: getStylesRef('typeOfWork'),
    fontSize: 16,
    fontWeight: 400,
  },
  town: {
    fontSize: 16,
    fontWeight: 400,
  },
  standalone: {
    [`& .${getStylesRef('title')}`]: {
      fontSize: 28,
      fontWeight: 700,
      color: theme.colors.grayScale,
    },
    [`& .${getStylesRef('salary')}`]: {
      fontSize: 20,
      fontWeight: 700,
    },
    [`& .${getStylesRef('typeOfWork')}`]: {
      fontSize: 20,
    },
  },
}));

function VacancyListItem({ vacancy, standalone }) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.vacancyList.favorites);

  const toggle = useCallback((id) => {
    dispatch(toggleFavorite(id));
  }, [dispatch]);

  const renderSalary = (from, to, currency) => {
    if (from !== 0 && to !== 0) {
      return (
        <span>
          з/п
          {' '}
          {from}
          -
          {to}
          {' '}
          {currency}
        </span>
      );
    } if (from !== 0 && to === 0) {
      return (
        <span>
          з/п
          {' '}
          от
          {' '}
          {from}
          {' '}
          {currency}
        </span>
      );
    } if (from !== 0 && to === 0) {
      return (
        <span>
          з/п
          {' '}
          {to}
          {' '}
          {currency}
        </span>
      );
    }
    return (<span>з/п по договоренности</span>);
  };

  return (
    <Card
      className={cx(classes.vacancy, { [classes.standalone]: standalone })}
      padding="24px"
      style={{ margin: '16px 0', borderColor: theme.colors.grayScale[2] }}
      withBorder
      radius="12px"
    >
      <Group position="apart" noWrap="true">
        <Title className={classes.title}>
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
        <Text className={classes.salary}>
          {renderSalary(vacancy.payment_from, vacancy.payment_to, vacancy.currency)}
        </Text>
        <Text fw={400} fz={20} c="#7B7C88">•</Text>
        <Text className={classes.typeOfWork}>{vacancy.type_of_work.title}</Text>
      </Group>
      <Group spacing={12}>
        <img src={location} alt="Location" />
        <Text className={classes.town}>{vacancy.town.title}</Text>
      </Group>
    </Card>
  );
}

VacancyListItem.propTypes = {
  vacancy: PropTypes.shape({
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
  }).isRequired,
  standalone: PropTypes.bool,
};

VacancyListItem.defaultProps = {
  standalone: false,
};

export default VacancyListItem;
