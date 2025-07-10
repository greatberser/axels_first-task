import FilterPanel from './FilterPanel';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterPanel> = {
  title: 'Components/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
};

export default meta;

type FilterPanelProps = {
  onFilter: (data: { date: string; category: string }) => void;
};

export const Default: StoryObj<FilterPanelProps> = {
  args: {
    onFilter: (data) => console.log('Filter applied:', data),
  },
};
