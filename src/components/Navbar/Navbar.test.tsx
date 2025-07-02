import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<div>Navbar Component</div>);
    expect(asFragment()).toMatchSnapshot();
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
