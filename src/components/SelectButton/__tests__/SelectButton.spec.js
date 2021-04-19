import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SelectButton from '../index';

const setUp = (genres) => {
  const renderer = new ShallowRenderer();
  renderer.render(<SelectButton genres={genres} />);
  return renderer.getRenderOutput();
};

describe('render SelectButton component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp(['item1', 'item2']);
    expect(result).toMatchSnapshot();
  });
});
