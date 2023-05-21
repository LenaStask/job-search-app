import React, { useState } from 'react';
import '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import {
  Burger,
  Container, Group, Header as MantineHeader, createStyles, rem, Transition, Paper,
} from '@mantine/core';
import PropTypes from 'prop-types';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import AppLogo from '../appLogo/AppLogo';

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'end',
    },
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
    color: theme.colors.green[3],
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
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
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
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
    link: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};

export default Header;
