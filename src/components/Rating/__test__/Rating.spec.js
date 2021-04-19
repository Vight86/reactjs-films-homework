import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Rating from '../index';

const setUp = (className, withStars, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Rating className={className} withStars={withStars}>{children}</Rating>);
  return renderer.getRenderOutput();
};

describe('render Rating component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp('class', true, 3.8);
    expect(result).toMatchSnapshot();
  });
});
