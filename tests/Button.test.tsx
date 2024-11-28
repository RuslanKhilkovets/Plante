import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../src/components/UI/Button/CustomButton';
import React from 'react';
import { jest } from '@jest/globals';

test('renders button with text', () => {
  render(<CustomButton>Підписатися</CustomButton>);
  expect(screen.getByText('Підписатися')).toBeInTheDocument();
});

test('calls onClick handler', () => {
  const handleClick = jest.fn();
  render(<CustomButton onClick={handleClick}>Підписатися</CustomButton>);
  fireEvent.click(screen.getByText('Підписатися'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
