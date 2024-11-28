import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CustomInput from '../src/components/UI/Input/CustomInput';
import '@testing-library/jest-dom';

test('applies focus styles when focused', async () => {
  render(<CustomInput placeholder="Enter text" />);
  const inputElement = screen.getByPlaceholderText('Enter text');

  fireEvent.focus(inputElement);

  await waitFor(() => {
    expect(inputElement.closest('.MuiInputBase-root')).toHaveClass('Mui-focused');
  });
});
