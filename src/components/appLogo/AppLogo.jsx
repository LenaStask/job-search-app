import React from 'react';
import {
  Box, useMantineTheme, Center, Image,
} from '@mantine/core';
import logo from '../../assets/logo.svg';

function AppLogo() {
  const theme = useMantineTheme();
  return (
    <Box
      sx={() => ({
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        cursor: 'pointer',
        color: theme.colors.grayScale[7],
      })}
    >
      <Center>
        <Image src={logo} alt="Logo" mr={8} />
        <span> Jobored</span>
      </Center>
    </Box>
  );
}

export default AppLogo;
