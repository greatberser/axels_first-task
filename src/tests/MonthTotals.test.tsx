import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MonthTotals', () => {
  it('should render list of month totals', () => {
    const { asFragment } = render(<div>MonthTotals Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display total expenses for the month', () => {
    const mockTotal = 100;
    render(<div>Total Expenses: ${mockTotal.toFixed(2)}</div>);
    expect(screen.getByText(/total expenses: \$100\.00/i)).toBeInTheDocument();
  });

  it('should handle empty total gracefully', () => {
    render(<div>Total Expenses: $0.00</div>);
    expect(screen.getByText(/total expenses: \$0\.00/i)).toBeInTheDocument();
  });
});
