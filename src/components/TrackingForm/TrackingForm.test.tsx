import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrackingForm from './TrackingForm';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('TrackingForm', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TrackingForm />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('show errors when form is submitted with empty fields', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TrackingForm />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = screen.getByRole('button', { name: /add expense/i });
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/Category is required/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Amount is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
  });

  it('shows error for negative amount', async () => {
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
  it('shows error for invalid date format', async () => {
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
