import React from 'react';
import {
  ActionIcon, Card, Title, rem, createStyles,
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

function Vacancy({ profession }) {
  const { classes } = useStyles();

  return (
    <Card className={classes.vacancy} withBorder radius="12px">
      <div className="card__title">
        <Title className={classes.title} size={rem(20)} color="#5E96FC">{profession}</Title>
        <ActionIcon>
          <a className="header__logo-image" href="/#">
            <img src={star} alt="icon" />
          </a>
        </ActionIcon>
      </div>
      <div className="card__content">
        <span>з/п от 70000 rub</span>
        <span>Полный рабочий день</span>
      </div>
      <div className="card__location">
        <img src={location} alt="location" />
        <span>Новый Уренгой</span>
      </div>
    </Card>
  );
}

Vacancy.propTypes = {
  profession: PropTypes.string.isRequired,
};

export default Vacancy;
