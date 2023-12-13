import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('InputText component', () => {
  it('should render', () => {
    render(<Button label="test" />);
  });
});
