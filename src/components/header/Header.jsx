import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  createStyles,
  rem,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '../logo/Logo';

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',

    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'end',
    },
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  link: {
    color: theme.colors.grayScale[6],
    display: 'block',
    fontSize: rem(16),
    fontWeight: 400,
    padding: `${rem(8)} ${rem(12)}`,
    textDecoration: 'none',

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  linkActive: {
    '&, &:hover': {
      color: theme.colors.brand,
    },
  },
  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
  burgerMenu: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: rem(84),
    zIndex: 1,

    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },
}));

function Header({ links }) {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(location.pathname);
  const { classes, cx } = useStyles();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className={cx(classes.link, { [classes.linkActive]: active === link.path })}
      onClick={() => {
        setActive(link.path);
        if (opened) {
          toggle();
        }
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <MantineHeader height={84}>
      <Container className={classes.header}>
        <Logo />
        <Group className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} />
        <Transition mounted={opened} duration={200} transition="pop-top-right">
          {(styles) => (
            <Paper className={classes.burgerMenu} style={styles} withBorder>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};

export default Header;
