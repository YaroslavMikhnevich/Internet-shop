import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Btn from './Btn';
import '@testing-library/jest-dom';

describe('Btn component', () => {
    it('renders a button with any text content', () => {
        const props = {
          text: 'Click me',
          onClick: jest.fn(),
        };
    
        const { getByRole } = render(<Btn {...props} />);
    
        const button = getByRole('button');
        expect(button).toHaveTextContent(props.text);
      });

  it('calls onClick function when clicked', () => {
    const props = {
      type: 'button',
      text: 'Click me',
      onClick: jest.fn(),
    };

    const { getByText } = render(<Btn {...props} />);

    const button = getByText(props.text);
    fireEvent.click(button);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});