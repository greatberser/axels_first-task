import MonthTotals from './MonthTotals';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MonthTotals> = {
  title: 'Components/MonthTotals',
  component: MonthTotals,
  tags: ['autodocs'],
};

export default meta;

type MonthTotalsProps = {
  totals: [string, number][];
};

export const Default: StoryObj<MonthTotalsProps> = {
  args: {
    totals: [
      ['January', 1234.56],
      ['February', 789.01],
      ['March', 456.78],
      ['April', 910.11],
      ['May', 1213.14],
      ['June', 1516.17],
      ['July', 1819.2],
      ['August', 2122.23],
      ['September', 2425.26],
      ['October', 2728.29],
      ['November', 3031.32],
      ['December', 3334.35],
    ],
  },
};

export const Empty: StoryObj<MonthTotalsProps> = {
  args: {
    totals: [],
  },
};

export const SingleMonth: StoryObj<MonthTotalsProps> = {
  args: {
    totals: [['January', 1234.56]],
  },
};
