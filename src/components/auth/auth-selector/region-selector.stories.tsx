
import { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { RegionSelector } from './region-selector';

const meta: Meta<typeof RegionSelector> = {
  title: 'Components/Auth/RegionSelector',
  component: RegionSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Selector de región de servidor con banderas e información de latencia.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['south-america', 'north-america', 'europe', 'oceania'],
      description: 'Región seleccionada',
    },
    onChange: {
      description: 'Callback cuando se cambia la región',
      action: 'region-changed',
    },
  },
};

export default meta;

const RegionSelectorWithState = () => {
  const [region, setRegion] = useState('oceania');
  return <RegionSelector value={region} onChange={setRegion} />;
};

type Story = StoryObj<typeof RegionSelector>;

export const Default: Story = {
  render: () => <RegionSelectorWithState />,
};

export const SouthAmerica: Story = {
  args: {
    value: 'south-america',
  },
};

export const NorthAmerica: Story = {
  args: {
    value: 'north-america',
  },
};

export const Europe: Story = {
  args: {
    value: 'europe',
  },
};

export const Oceania: Story = {
  args: {
    value: 'oceania',
  },
};