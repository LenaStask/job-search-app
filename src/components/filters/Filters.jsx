import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createStyles,
  rem,
  useMantineTheme,
  Box,
  Button,
  Center,
  Group,
  NumberInput,
  Paper,
  Select,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import { X } from 'tabler-icons-react';
import { getCatalogues } from '../../store/slices/filtersSlice';
import { setFilters } from '../../store/slices/vacancySearchSlice';

const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: rem(12),
    border: `${rem(1)} solid ${theme.colors.grayScale[2]}`,
    padding: rem(16),
  },
  resetButton: {
    color: theme.colors.grayScale[4],
    cursor: 'pointer',
    fontSize: rem(14),
    textAlign: 'center',

    '&:hover': {
      color: theme.colors.brand,
    },
  },
  resetButtonIcon: {
    marginLeft: rem(5),
    marginTop: rem(2),
  },
  submitButton: {
    marginTop: rem(20),
  },
}));

function Filters() {
  const dispatch = useDispatch();
  const { catalogues } = useSelector((state) => state.filters);

  const theme = useMantineTheme();
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      catalogue: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  useEffect(() => {
    dispatch(getCatalogues());
  }, []);

  const onFilter = useCallback((values) => {
    dispatch(setFilters(values));
  }, []);

  return (
    <Paper className={classes.container}>
      <form onSubmit={form.onSubmit((values) => onFilter(values))}>
        <Group position="apart" mb={32}>
          <Title size="h4">
            Фильтры
          </Title>
          <Box onClick={() => form.reset()} className={classes.resetButton}>
            <Center>
              <span>Сбросить все</span>
              <X size={14} strokeWidth={2} className={classes.resetButtonIcon} />
            </Center>
          </Box>
        </Group>
        <Select
          data-elem="industry-select"
          value={form.values.catalogue}
          onChange={(value) => form.setFieldValue('catalogue', value)}
          label="Отрасль"
          labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
          placeholder="Выберите отрасль"
          data={catalogues.map((c) => ({ value: c.key, label: c.title }))}
          rightSection={<IconChevronDown size={18} style={{ color: theme.colors.grayScale[4] }} />}
          rightSectionWidth={40}
          styles={{
            label: { color: theme.colors.grayScale[6] },
            rightSection: { pointerEvents: 'none' },
          }}
          radius="md"
          allowDeselect
        />
        <NumberInput
          data-elem="salary-from-input"
          value={form.values.paymentFrom}
          onChange={(value) => form.setFieldValue('paymentFrom', value)}
          placeholder="От"
          label="Оклад"
          labelProps={{
            fw: 'bold', fz: '16px', mb: '8px',
          }}
          radius="md"
          wrapperProps={{ mt: '20px' }}
          step={1000}
          min={0}
          styles={{
            label: { color: theme.colors.grayScale[6] },
          }}
        />
        <NumberInput
          data-elem="salary-to-input"
          value={form.values.paymentTo}
          onChange={(value) => form.setFieldValue('paymentTo', value)}
          placeholder="До"
          labelProps={{ fw: 'bold', fz: '16px', mb: '4px' }}
          radius="md"
          wrapperProps={{ mt: '8px' }}
          step={1000}
          min={0}
        />
        <Button
          data-elem="search-button"
          type="submit"
          className={classes.submitButton}
          fullWidth
        >
          Применить
        </Button>
      </form>
    </Paper>
  );
}

export default Filters;
