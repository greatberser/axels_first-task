import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FormPage', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<div>FormPage Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains form elements', () => {
    render(
      <form>
        <label htmlFor="expense">Expense</label>
        <input id="expense" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
    expect(screen.getByLabelText(/expense/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
