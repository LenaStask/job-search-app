import React from 'react';
import {
  ActionIcon, Card, Title, rem, createStyles, Text,
} from '@mantine/core';
import PropTypes from 'prop-types';
import star from '../../assets/star.svg';
import location from '../../assets/location.svg';
import './vacancy.scss';

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

function Vacancy({ vacancy }) {
  const { classes } = useStyles();

  return (
    <Card className={classes.vacancy} padding="24px" margin="16px" withBorder radius="12px">
      <div className="card__title">
        <Title className={classes.title} size={rem(20)} fw={600} color="#5E96FC">{vacancy.profession}</Title>
        <ActionIcon>
          <a className="header__logo-image" href="/#">
            <img src={star} alt="icon" />
          </a>
        </ActionIcon>
      </div>
      <div className="card__content">
        <Text fw={600} fz={16}>
          з/п от
          {' '}
          {vacancy.payment_from}
          {' '}
          rub
        </Text>
        <Text fw={400} fz={20} c="#7B7C88" mr={12} ml={12}>•</Text>
        <Text fw={400} fz={16}>{vacancy.type_of_work.title}</Text>
      </div>
      <div className="card__location">
        <img src={location} alt="location" />
        <Text fw={400} fz={16} ml={12}>{vacancy.town.title}</Text>
      </div>
    </Card>
  );
}
Vacancy.propTypes = {
  vacancy: PropTypes.shape({
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
export default Vacancy;
