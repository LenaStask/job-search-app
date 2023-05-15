import React, { useCallback, useEffect, useState } from 'react';
import {
  Paper, Select, Button,
  Group, Title, Anchor, Center, useMantineTheme, NumberInput,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { X } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, getCatalogues } from '../../store/slices/filtersSlice';

function Filters() {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const { catalogues } = useSelector((state) => state.filters);
  const [selectCatalogue, setSelectCatalogue] = useState('');

  useEffect(() => {
    dispatch(getCatalogues());
  }, []);

  const onClick = useCallback((value) => {
    dispatch(setFilters(value));
  }, [dispatch]);

  return (
    <Paper radius="md" p="md" withBorder>
      <Group position="apart" mb={32}>
        <Title size="h4">
          Фильтры
        </Title>
        <Anchor href="/some/valid/uri" size={14} sx={{ color: '#ACADB9' }}>
          <Center>
            <span>Сбросить все</span>
            <X size={14} strokeWidth={1.5} style={{ marginLeft: 5 }} />
          </Center>
        </Anchor>
      </Group>
      <Select
        onChange={(value) => {
          setSelectCatalogue(value);
        }}
        label="Отрасль"
        labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
        placeholder="Выберите отрасль"
        data={catalogues.map((catalogue) => ({ value: catalogue.key, label: catalogue.title }))}
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
        wrapperProps={{ mt: '15px' }}
        styles={{
          control: { border: 0, color: '#ACADB9' }, controlUp: { alignItems: 'end' }, controlDown: { alignItems: 'start' },
        }}
      />
      <NumberInput
        placeholder="До"
        data={['React', 'Vue', 'Angular', 'Svelte']}
        labelProps={{ fw: 'bold', fz: '16px', mb: '4px' }}
        radius="md"
        wrapperProps={{ mt: '15px' }}
        styles={{
          control: { border: 0, color: '#ACADB9' }, controlUp: { alignItems: 'end' }, controlDown: { alignItems: 'start' }, wrapper: { mt: '8px' },
        }}
      />
      <Button onClick={() => onClick(selectCatalogue)} sx={{ backgroundColor: theme.colors.blueColor[0], marginTop: '20px' }} radius="md" fullWidth>
        Применить
      </Button>
    </Paper>
  );
}

export default Filters;
