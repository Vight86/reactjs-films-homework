import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import GenreList from '../index';

const setUp = (className, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <GenreList className={className}>
      {children}
    </GenreList>,
  );
  return renderer.getRenderOutput();
};

describe('render GenreList component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp('class', ['item1', 'item2']);
    expect(result).toMatchSnapshot();
  });
});
