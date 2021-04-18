import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieSynopsis from '../index';

const setUp = (className, isShown, children) => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <MovieSynopsis className={className} isShown={isShown}>{children}</MovieSynopsis>,
  );
  return renderer.getRenderOutput();
};

describe('render MovieList component', () => {
  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp('class', true, 'children');
    expect(result).toMatchSnapshot();
  });
});
