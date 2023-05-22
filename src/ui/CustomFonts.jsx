import React from 'react';
import { Global } from '@mantine/core';
import InterRegular from '../assets/fonts/Inter/static/Inter-Regular.ttf';
import InterMedium from '../assets/fonts/Inter/static/Inter-Medium.ttf';
import InterSemiBold from '../assets/fonts/Inter/static/Inter-SemiBold.ttf';
import InterBold from '../assets/fonts/Inter/static/Inter-Bold.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';

function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${InterRegular}') format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${InterMedium}') format("truetype")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${InterSemiBold}') format("truetype")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${InterBold}') format("truetype")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${PoppinsSemiBold}') format("truetype")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}

export default CustomFonts;
