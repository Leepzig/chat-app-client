import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/*
#App
header exist
username label exist, input for username exist, and submit exist
user ablet o type in username input field
after submit username is placed in the header
after submit messages appear.

#Messages
container exists


#ChatInput
input

*/