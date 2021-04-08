import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HomePage from '../index';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HomePage />);
  return renderer.getRenderOutput();
};

describe('render HomePage component', () => {
  it('should be main tag', () => {
    const result = setUp();
    expect(result.type).toBe('main');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });
});
