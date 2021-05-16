import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Title from '../index';

const setUp = (className, title) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Title className={className}>{title}</Title>);
  return renderer.getRenderOutput();
};

describe('render Title component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render className secondary correctly', () => {
    const result = setUp('secondary', 'title');
    expect(result).toMatchSnapshot();
  });

  it('render className tertiary correctly', () => {
    const result = setUp('tertiary', 'title');
    expect(result).toMatchSnapshot();
  });
});
