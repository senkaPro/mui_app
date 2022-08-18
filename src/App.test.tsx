import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test if App contains header main and footer
test("render dashboard", () => {
  render(<App/>)
  const dashboard = screen.getAllByDisplayValue(/dashboard/i)
  expect(dashboard).toBeInTheDocument();
})