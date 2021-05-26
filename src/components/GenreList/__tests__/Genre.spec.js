import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import GenreList from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <GenreList className="test">
      {['test', 'test1']}
    </GenreList>,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render GenreList component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
