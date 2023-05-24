import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  selectIcon: {
    color: theme.colors.grayScale[4],
  },
}));

function Filters({ onFilter }) {
  const dispatch = useDispatch();
  const { catalogues } = useSelector((state) => state.filters);
  const { catalogue, paymentFrom, paymentTo } = useSelector((state) => state.vacancySearch.filters);

  const theme = useMantineTheme();
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      catalogue,
      paymentFrom,
      paymentTo,
    },
  });

  useEffect(() => {
    dispatch(getCatalogues());
  }, []);

  useEffect(() => {
    dispatch(setFilters(form.values));
  }, [form.values]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onFilter();
  }, [onFilter]);

  return (
    <Paper className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Group position="apart" mb={32}>
          <Title size="h4">
            Фильтры
          </Title>
          <Box
            onClick={() => form.setValues({
              catalogue: '',
              paymentFrom: '',
              paymentTo: '',
            })}
            className={classes.resetButton}
          >
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
          data={catalogues.map((c) => ({ value: c.key, label: c.title }))}
          label="Отрасль"
          labelProps={{
            color: theme.colors.grayScale[6], fw: 700, fz: 16, mb: 8,
          }}
          placeholder="Выберите отрасль"
          rightSection={<IconChevronDown size={18} className={classes.selectIcon} />}
          rightSectionWidth={40}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          allowDeselect
        />
        <NumberInput
          data-elem="salary-from-input"
          value={form.values.paymentFrom}
          onChange={(value) => form.setFieldValue('paymentFrom', value)}
          label="Оклад"
          labelProps={{ color: theme.colors.grayScale[6], fw: 700, fz: 16 }}
          wrapperProps={{ mt: 20 }}
          min={0}
          step={1000}
          placeholder="От"
        />
        <NumberInput
          data-elem="salary-to-input"
          value={form.values.paymentTo}
          onChange={(value) => form.setFieldValue('paymentTo', value)}
          min={0}
          step={1000}
          placeholder="До"
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

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filters;
