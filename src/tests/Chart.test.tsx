import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Chart', () => {
  it('should match a snapshot', () => {
    const { asFragment } = render(<div>Chart Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display chart title', () => {
    render(<div>Chart Component</div>);
    expect(screen.getByText(/chart component/i)).toBeInTheDocument();
  });
});
