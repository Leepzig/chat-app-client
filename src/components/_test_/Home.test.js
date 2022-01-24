import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders header that says "Chat World"', () => {
  render(<Home/>);
  const header = screen.getByRole('heading', {name: 'Chat World'});
  expect(header).toBeInTheDocument();
});



/*
#Home
header exist

user ablet o type in username input field
after submit username is placed in the header
after submit messages appear.

#Messages
container exists


#ChatInput
input

*/