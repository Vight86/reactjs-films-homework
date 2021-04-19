import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../index';

const setUp = (className, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header className={className}>{children}</Header>);
  return renderer.getRenderOutput();
};

describe('render Header component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp('test', <p />);
    expect(result).toMatchSnapshot();
  });
});
