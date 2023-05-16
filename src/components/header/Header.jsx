import React, { useState } from 'react';
import '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import {
  Burger,
  Container, Group, Header as MantineHeader, createStyles, rem,
} from '@mantine/core';
import PropTypes from 'prop-types';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import AppLogo from '../appLogo/AppLogo';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
    color: theme.colors.green[3],
  },
  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
  linkActive: {
    '&, &:hover': {
      color: '#5E96FC',
    },
  },
}));

function Header({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <MantineHeader height={84}>
      <Container className={classes.header}>
        <AppLogo />
        <Group className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} />
      </Container>
    </MantineHeader>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};

export default Header;
