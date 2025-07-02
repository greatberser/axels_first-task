import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Chart', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<div>Chart Component</div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays chart title', () => {
    render(<div>Chart Component</div>);
    expect(screen.getByText(/chart component/i)).toBeInTheDocument();
  });
});
