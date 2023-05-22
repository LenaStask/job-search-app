import React from 'react';
import PropTypes from 'prop-types';
import { rem, MantineProvider } from '@mantine/core';
import CustomFonts from './CustomFonts';

function Provider({ children }) {
  return (
    <MantineProvider
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          body: {
            backgroundColor: '#F7F7F8',
          },
        }),
        colors: {
          brand: ['#C9E0FF', '#C9E0FF', '#C9E0FF', '#C9E0FF', '#C9E0FF', '#DEECFF', '#5E96FC', '#92C1FF', '#B7D6FF', '#5E96FC'],
          grayScale: ['#FFFFFF', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134', '#232134', '#232134', '#232134'],
        },
        fontFamily: 'Inter, sans-serif',
        primaryColor: 'brand',
        components: {
          Button: {
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.brand,
                borderRadius: rem(8),
              },
            }),
          },
          Input: {
            styles: (theme) => ({
              input: {
                borderColor: theme.colors.grayScale[2],
                borderRadius: rem(8),
                fontSize: rem(14),
              },
            }),
          },
          NumberInput: {
            styles: (theme) => ({
              wrapper: {
                marginTop: rem(8),
              },
              control: {
                border: 0,
                color: theme.colors.grayScale[4],
              },
              controlUp: {
                alignItems: 'end',
              },
              controlDown: {
                alignItems: 'start',
              },
            }),
          },
          Paper: {
            styles: (theme) => ({
              root: { color: theme.colors.grayScale[6] },
            }),
          },
          Text: {
            styles: (theme) => ({
              root: {
                color: theme.colors.grayScale[6],
                fontSize: rem(16),
              },
            }),
          },
        },
      }}
    >
      <CustomFonts />
      {children}
    </MantineProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
