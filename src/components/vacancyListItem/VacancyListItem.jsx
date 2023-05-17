import React from 'react';
import {
  ActionIcon, Card, Title, rem, createStyles, Text, Group,
} from '@mantine/core';
import PropTypes from 'prop-types';
import star from '../../assets/star.svg';
import location from '../../assets/location.svg';

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

  return (
    <Card
      className={classes.vacancy}
      padding="24px"
      style={{ margin: '16px 0' }}
      withBorder
      radius="12px"
      component="a"
      href={`/vacancy/${vacancy.id}`}
    >
      <Group position="apart" noWrap="true">
        <Title className={classes.title} size={rem(20)} fw={600} color="#5E96FC">{vacancy.profession}</Title>
        <ActionIcon variant="transparent">
          <div className="header__logo-image" href="/#">
            <img src={star} alt="icon" />
          </div>
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
