import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterPanel from '../components/FilterPanel';

describe('FilterPanel', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<FilterPanel onFilter={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onFilter with correct data', async () => {
    const mockOnFilter = jest.fn();
    render(<FilterPanel onFilter={mockOnFilter} />);
    const user = userEvent.setup();

    const dateInput = screen.getByLabelText(/date/i);
    await user.clear(dateInput);
    await user.type(dateInput, '2023-10-01');

    const categorySelect = screen.getByLabelText(/category/i);
    await user.click(categorySelect);

    const foodOption = await screen.findByText('Food');
    await user.click(foodOption);

    const applyButton = screen.getByRole('button', { name: /apply filters/i });
    await user.click(applyButton);

    expect(mockOnFilter).toHaveBeenCalledWith({
      date: '2023-10-01',
      category: 'Food',
    });
  });
});
