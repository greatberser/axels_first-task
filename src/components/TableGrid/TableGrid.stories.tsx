import type { Meta, StoryObj } from '@storybook/react';
import TableGrid from './TableGrid';

const meta: Meta<typeof TableGrid> = {
  title: 'Components/TableGrid',
  component: TableGrid,
  tags: ['autodocs'],
};

export default meta;

type Expense = {
  id: number;
  date: string;
  category: string;
  amount: number;
};

type Story = StoryObj<typeof TableGrid>;

const sampleExpenses: Expense[] = [
  { id: 1, date: '2023-01-01', category: 'Food', amount: 50 },
  { id: 2, date: '2023-01-02', category: 'Transport', amount: 20 },
  { id: 3, date: '2023-01-03', category: 'Entertainment', amount: 30 },
];

export const Default: Story = {
  args: {
    expenses: sampleExpenses,
  },
};
export const Empty: Story = {
  args: {
    expenses: [],
  },
};
