import React from 'react';
import {
  createStyles,
  rem,
  Box,
  Center,
  Image,
} from '@mantine/core';
import logo from '../../assets/logo.svg';

const useStyles = createStyles((theme) => ({
  logo: {
    color: theme.colors.grayScale,
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
    fontSize: rem(24),
    fontWeight: 600,
    left: rem(16),
    position: 'absolute',
    textAlign: 'center',
    textDecoration: 'none',
  },
}));

function Logo() {
  const { classes } = useStyles();

  return (
    <Box
      className={classes.logo}
      component="a"
      href="/"
    >
      <Center>
        <Image src={logo} alt="Логотип" mr={8} />
        <span> Jobored</span>
      </Center>
    </Box>
  );
}

export default Logo;
