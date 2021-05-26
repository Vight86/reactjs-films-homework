import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Rating from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Rating className="test" withStars={false}>{4}</Rating>);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Rating component', () => {
  it('render without stars correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render with stars correctly', () => {
    renderer.render(<Rating className="test" withStars>{4}</Rating>);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
