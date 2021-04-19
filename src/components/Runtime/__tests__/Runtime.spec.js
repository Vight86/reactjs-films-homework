import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Runtime from '../index';

const setUp = (children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Runtime>{children}</Runtime>);
  return renderer.getRenderOutput();
};

describe('render Runtime component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp(123);
    expect(result).toMatchSnapshot();
  });
});
