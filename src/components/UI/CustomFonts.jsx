import React from 'react';
import { Global } from '@mantine/core';
import regular from '../../assets/fonts/Inter/static/Inter-Regular.ttf';

function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${regular}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}

export default CustomFonts;
