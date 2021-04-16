import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../index';

const setUp = (className, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header className={className}>{children}</Header>);
  return renderer.getRenderOutput();
};

describe('render Header component', () => {
  it('should be header tag', () => {
    const result = setUp();
    expect(result.type).toBe('header');
  });

  it('default className should empty', () => {
    const result = setUp();
    expect(result.props.className).toBe('');
  });

  it('should render passed className properly', () => {
    const result = setUp('testClass', null);
    expect(result.props.className).toBe('testClass');
  });

  it('should render passed children correctly', () => {
    const result = setUp(null, <div />);
    expect(result.props.children).toEqual(<div />);
  });
});
