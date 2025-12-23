// Tests Unitaires - Teste le composant App
import { render, screen } from '@testing-library/react';
import App from './App';

// Test pour vérifier que le lien 'apprendre react' est rendu
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
