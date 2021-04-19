import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../index';

const setUp = (className, onClick, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Button className={className} onClick={onClick}>{children}</Button>);
  return renderer.getRenderOutput();
};

describe('render Button component', () => {
  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp('class', null, 'test');
    expect(result).toMatchSnapshot();
  });

  it('render onClick without props', () => {
    const result = setUp();
    expect(result.props.onClick()).toMatchSnapshot();
  });
});
