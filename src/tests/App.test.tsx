import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

test('renders login portal link', () => {
  render(<App />);
  const linkElement = screen.getByText(/login portal/i);
  expect(linkElement).toBeInTheDocument();
});
