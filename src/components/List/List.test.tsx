import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from './List';

describe('List', () => {
  it('renders empty message when no expenses', () => {
    render(<List expenses={[]} />);
    expect(screen.getByText(/no found/i)).toBeInTheDocument();
  });

  it('renders list of expenses', () => {
    const expenses = [
      { id: 1, category: 'Food', date: '2023-10-01', amount: 10.0 },
      { id: 2, category: 'Transport', date: '2023-10-02', amount: 20.0 },
    ];
    render(<List expenses={expenses} />);

    expect(screen.getByText(/food/i)).toBeInTheDocument();
    expect(screen.getByText(/transport/i)).toBeInTheDocument();
    expect(screen.getByText(/10\.00/i)).toBeInTheDocument();
    expect(screen.getByText(/20\.00/i)).toBeInTheDocument();
  });
});
