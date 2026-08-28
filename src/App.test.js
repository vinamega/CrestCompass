// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrestCompass title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrestCompass/i);
    expect(titleElement).toBeInTheDocument();
});
