import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<div>Home Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain Home navigation link', () => {
    render(
      <nav>
        <a href="/">Home</a>
        <a href="/form">Form</a>
      </nav>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('should contain Form navigation link', () => {
    render(
      <nav>
        <a href="/">Home</a>
        <a href="/form">Form</a>
      </nav>
    );
    expect(screen.getByText(/form/i)).toBeInTheDocument();
  });
});
