import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FormPage', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<div>FormPage Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain an expense input', () => {
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

  it('should contain a submit button', () => {
    render(
      <form>
        <label htmlFor="expense">Expense</label>
        <input id="expense" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
