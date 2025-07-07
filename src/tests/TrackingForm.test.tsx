import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrackingForm from '../components/TrackingForm';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('TrackingForm', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TrackingForm />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('when form is submitted with empty fields', () => {
    beforeEach(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <TrackingForm />
          </MemoryRouter>
        </Provider>
      );

      const submitButton = screen.getByRole('button', { name: /add expense/i });
      await userEvent.click(submitButton);
    });

    it('should show error for empty category', async () => {
      expect(
        await screen.findByText(/Category is required/i)
      ).toBeInTheDocument();
    });

    it('should show error for empty amount', async () => {
      expect(
        await screen.findByText(/Amount is required/i)
      ).toBeInTheDocument();
    });

    it('should show error for empty date', async () => {
      expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
    });
  });

  it('should shows error for negative amount', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TrackingForm />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByLabelText(/date/i), '2025-07-02');
    await userEvent.click(screen.getByLabelText(/category/i));
    await userEvent.click(screen.getByRole('option', { name: /Food/i }));
    await userEvent.type(screen.getByLabelText(/amount/i), '-100');

    await userEvent.click(screen.getByRole('button', { name: /add expense/i }));

    expect(
      await screen.findByText(/Amount must be a positive number/i)
    ).toBeInTheDocument();
  });
  it('should shows error for invalid date format', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TrackingForm />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByLabelText(/date/i), '2025-10-01');
    await userEvent.click(screen.getByLabelText(/category/i));
    await userEvent.click(screen.getByRole('option', { name: /Food/i }));
    await userEvent.type(screen.getByLabelText(/amount/i), '100');

    await userEvent.click(screen.getByRole('button', { name: /add expense/i }));

    expect(
      await screen.findByText(/Date cannot be in the future/i)
    ).toBeInTheDocument();
  });
});
