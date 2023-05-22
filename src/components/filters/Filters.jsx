import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@mantine/form';
import {
  Paper, Select, Button, Group, Title, useMantineTheme, NumberInput, Box, Center,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { X } from 'tabler-icons-react';
import { getCatalogues } from '../../store/slices/filtersSlice';
import { setFilters } from '../../store/slices/vacancySearchSlice';

function Filters() {
  const dispatch = useDispatch();
  const { catalogues } = useSelector((state) => state.filters);

  const theme = useMantineTheme();
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
  }, [dispatch]);

  return (
    <Paper
      radius={12}
      p="md"
      style={{ borderColor: theme.colors.grayScale[2] }}
      withBorder
    >
      <form onSubmit={form.onSubmit((values) => onFilter(values))}>
        <Group position="apart" mb={32}>
          <Title size="h4">
            Фильтры
          </Title>
          <Box
            onClick={() => form.reset()}
            sx={() => ({
              textAlign: 'center',
              cursor: 'pointer',
              color: theme.colors.grayScale[4],
              '&:hover': {
                color:
                  theme.colors.brand,
              },
            })}
          >
            <Center>
              <span>Сбросить все</span>
              <X size={14} strokeWidth={1.5} style={{ marginLeft: 5 }} />
            </Center>
          </Box>
        </Group>
        <Select
          value={form.values.catalogue}
          onChange={(value) => form.setFieldValue('catalogue', value)}
          label="Отрасль"
          labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
          placeholder="Выберите отрасль"
          data={catalogues.map((c) => ({ value: c.key, label: c.title }))}
          rightSection={<IconChevronDown size={18} style={{ color: '#ACADB9' }} />}
          rightSectionWidth={40}
          styles={{
            rightSection: { pointerEvents: 'none' },
          }}
          radius="md"
          allowDeselect
        />
        <NumberInput
          value={form.values.paymentFrom}
          onChange={(value) => form.setFieldValue('paymentFrom', value)}
          placeholder="От"
          label="Оклад"
          labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
          radius="md"
          wrapperProps={{ mt: '20px' }}
          step={1000}
          min={0}
          styles={{
            control: { border: 0, color: '#ACADB9' },
            controlUp: { alignItems: 'end' },
            controlDown: { alignItems: 'start' },
          }}
        />
        <NumberInput
          value={form.values.paymentTo}
          onChange={(value) => form.setFieldValue('paymentTo', value)}
          placeholder="До"
          labelProps={{ fw: 'bold', fz: '16px', mb: '4px' }}
          radius="md"
          wrapperProps={{ mt: '8px' }}
          step={1000}
          min={0}
          styles={{
            control: { border: 0, color: '#ACADB9' },
            controlUp: { alignItems: 'end' },
            controlDown: { alignItems: 'start' },
            wrapper: { mt: '8px' },
          }}
        />
        <Button
          type="submit"
          sx={{ backgroundColor: theme.colors.brand, marginTop: '20px' }}
          radius="md"
          fullWidth
        >
          Применить
        </Button>
      </form>
    </Paper>
  );
}

export default Filters;
