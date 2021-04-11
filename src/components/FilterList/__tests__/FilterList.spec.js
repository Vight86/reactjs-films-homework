import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilterList from '../index';

const setUp = (children) => {
  const renderer = new ShallowRenderer();
  renderer.render(<FilterList>{children}</FilterList>);
  return renderer.getRenderOutput();
};

describe('render FilterList component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp([
      <button type="button" key="key1">Button 1</button>,
      <button type="button" key="key2">Button 2</button>,
      <button type="button" key="key3">Button 3</button>,
      <button type="button" key="key4">Button 4</button>,
    ]);
    expect(result).toMatchSnapshot();
  });
});
