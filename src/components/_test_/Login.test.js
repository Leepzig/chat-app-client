import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('renders two buttons', () => {
  render(<Login/>);
  const button = screen.getByRole('button', {name: 'WingSpanFan'});
  expect(button).toBeInTheDocument();
});