import React from 'react';
import renderer from 'react-test-renderer';
import QuantityCard from './QuantityCard';

describe('QuantityCard', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<QuantityCard quantity={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});