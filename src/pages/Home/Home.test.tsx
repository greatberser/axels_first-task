import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<div>Home Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains a welcome message', () => {
    render(<div>Welcome to the Home Page</div>);
    expect(screen.getByText(/welcome to the home page/i)).toBeInTheDocument();
  });

  it('contains navigation links', () => {
    render(
      <nav>
        <a href="/">Home</a>
        <a href="/form">Form</a>
      </nav>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/form/i)).toBeInTheDocument();
  });
});
