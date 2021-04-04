import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Rating from '../index';

const setUp = (className, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Rating className={className}>{children}</Rating>);
  return renderer.getRenderOutput();
};

describe('render Rating component', () => {
  it('component tag should be p', () => {
    const result = setUp();
    expect(result.type).toBe('p');
  });

  it('render Rating className correctly', () => {
    const result = setUp('test className', null);
    expect(result.props.className).toBe('test className');
  });

  it('render Rating children correctly', () => {
    const result = setUp(null, 'test children');
    expect(result.props.children).toBe('test children');
  });
});
