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

  it('render with props', () => {
    const result = setUp('class', 'title');
    expect(result).toMatchSnapshot();
  });
});
