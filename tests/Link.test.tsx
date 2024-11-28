import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomLink from '../src/components/UI/Link/CustomLink';
import { jest } from '@jest/globals';

test('renders CustomLink with correct text', () => {
  render(
    <Router>
      <CustomLink to="/test">Test Link</CustomLink>
    </Router>,
  );

  expect(screen.getByText('Test Link')).toBeInTheDocument();
});

test('calls onMouseOver prop when hovered', () => {
  const onMouseOverMock = jest.fn();
  render(
    <Router>
      <CustomLink to="/test" onMouseOver={onMouseOverMock}>
        Test Link
      </CustomLink>
    </Router>,
  );

  fireEvent.mouseOver(screen.getByText('Test Link'));

  expect(onMouseOverMock).toHaveBeenCalledTimes(1);
});
