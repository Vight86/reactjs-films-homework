import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cover from '../index';

const setUp = (className, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Cover className={className}>{children}</Cover>);
  return renderer.getRenderOutput();
};

describe('render Button component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp('class', <img src="test" alt="test" />);
    expect(result).toMatchSnapshot();
  });
});
