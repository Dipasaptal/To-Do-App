import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-Do List title', () => {
  render(<App />);
  const linkElement = screen.getByText(/to-do list/i);
  expect(linkElement).toBeInTheDocument();
});
