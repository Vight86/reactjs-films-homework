import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieSynopsis from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <MovieSynopsis className="test" isShown={false}>Text</MovieSynopsis>,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render MovieSynopsis component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render correctly if info is shown', () => {
    renderer.render(
      <MovieSynopsis className="test" isShown>Text</MovieSynopsis>,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
