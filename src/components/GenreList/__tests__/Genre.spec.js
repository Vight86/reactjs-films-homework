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
  it('tag should be p', () => {
    const result = setUp();
    expect(result.type).toBe('p');
  });

  it('render className correctly', () => {
    const result = setUp('test className', null);
    expect(result.props.className).toBe('test className');
  });

  it('render children correctly', () => {
    const result = setUp(null, 'test children');
    expect(result.props.children).toBe('test children');
  });
});
