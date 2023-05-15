import React, { useCallback, useEffect, useState } from 'react';
import {
  Paper, Select, Button,
  Group, Title, Anchor, Center, useMantineTheme, NumberInput, MantineProvider,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { X } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogues, setFilters } from '../../store/vacancyListSlice';

function Filters() {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const { catalogues } = useSelector((state) => state.vacancyList);
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
        onChange={(event) => {
          setSelectCatalogue(event.target.value);
        }}
        label="Отрасль"
        labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
        placeholder="Выберете отрасль"
        data={catalogues.map((catalogue) => ({ value: catalogue.key, label: catalogue.title }))}
        rightSection={<IconChevronDown size={18} style={{ color: '#ACADB9' }} />}
        rightSectionWidth={40}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        radius="md"
      />
      <MantineProvider
        inherit
        theme={{
          components: {
            Input: {
              styles: (theme1) => ({
                input: { borderColor: theme.colors.violet[theme1.fn.primaryShade()] },
                control: { backgroundColor: theme.colors.blue[0], borderLeft: 0 },
                rightSection: { borderBottom: 0, borderLeft: 0 },
              }),
            },
          },
        }}
      >
        <NumberInput
          placeholder="От"
          data={['React', 'Vue', 'Angular', 'Svelte']}
          label="Оклад"
          labelProps={{ fw: 'bold', fz: '16px', mb: '8px' }}
          radius="md"
          wrapperProps={{ mt: '15px' }}
          controlUp={<IconChevronUp />}
        />
      </MantineProvider>
      <Select
        placeholder="До"
        data={['React', 'Vue', 'Angular', 'Svelte']}
        radius="md"
        mt={8}
        mb={8}
      />
      <Button onClick={() => onClick(selectCatalogue)} sx={{ backgroundColor: theme.colors.blueColor[0] }} radius="md" fullWidth>
        Применить
      </Button>
    </Paper>
  );
}

export default Filters;
