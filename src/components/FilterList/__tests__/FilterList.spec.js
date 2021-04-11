import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilterList from '../index';

const setUp = (children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<FilterList>{children}</FilterList>);
  return renderer.getRenderOutput();
};

describe('render FilterList component', () => {
  it('should be nav tag', () => {
    const result = setUp();
    expect(result.type).toBe('nav');
  });

  it('should have ul list inside', () => {
    const result = setUp();
    expect(result.props.children.type).toBe('ul');
  });

  it('should render number of default li elements properly', () => {
    const result = setUp();
    const ul = result.props.children;
    expect(ul.props.children).toHaveLength(2);
  });

  it('should render number of passed li elements properly', () => {
    const result = setUp([
      <button type="button" key="key1">Button 1</button>,
      <button type="button" key="key2">Button 2</button>,
      <button type="button" key="key3">Button 3</button>,
      <button type="button" key="key4">Button 4</button>,
    ]);
    const ul = result.props.children;
    expect(ul.props.children).toHaveLength(4);
  });
});
