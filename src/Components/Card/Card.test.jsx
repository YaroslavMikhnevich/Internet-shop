import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import Card from './Card';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Card component', () => {
  it('should render correctly', () => {
    useSelector.mockImplementation(() => ({
      orders: [{ id: 1, name: 'Product 1', price: 10 }],
    }));

    const component = renderer.create(<Card />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});