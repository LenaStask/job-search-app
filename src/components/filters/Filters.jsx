import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const [catalogue, setCatalogue] = useState('');

  const theme = useMantineTheme();

  useEffect(() => {
    dispatch(getCatalogues());
  }, []);

  const onFilter = useCallback(() => {
    dispatch(setFilters({ catalogue }));
  }, [catalogue]);

  return (
    <Paper radius={12} p="md" withBorder>
      <Group position="apart" mb={32}>
        <Title size="h4">
          Фильтры
        </Title>
        <Box
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
        onChange={(value) => setCatalogue(value)}
        label="Отрасль"
        labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
        placeholder="Выберите отрасль"
        data={catalogues.map((c) => ({ value: c.key, label: c.title }))}
        rightSection={<IconChevronDown size={18} style={{ color: '#ACADB9' }} />}
        rightSectionWidth={40}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        radius="md"
      />
      <NumberInput
        placeholder="От"
        data={['React', 'Vue', 'Angular', 'Svelte']}
        label="Оклад"
        labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
        radius="md"
        wrapperProps={{ mt: '20px' }}
        step={1000}
        min={0}
        styles={{
          control: { border: 0, color: '#ACADB9' }, controlUp: { alignItems: 'end' }, controlDown: { alignItems: 'start' },
        }}
      />
      <NumberInput
        placeholder="До"
        data={['React', 'Vue', 'Angular', 'Svelte']}
        labelProps={{ fw: 'bold', fz: '16px', mb: '4px' }}
        radius="md"
        wrapperProps={{ mt: '8px' }}
        step={1000}
        min={0}
        styles={{
          control: { border: 0, color: '#ACADB9' }, controlUp: { alignItems: 'end' }, controlDown: { alignItems: 'start' }, wrapper: { mt: '8px' },
        }}
      />
      <Button
        onClick={onFilter}
        sx={{ backgroundColor: theme.colors.brand, marginTop: '20px' }}
        radius="md"
        fullWidth
      >
        Применить
      </Button>
    </Paper>
  );
}

export default Filters;
