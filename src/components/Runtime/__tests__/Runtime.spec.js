import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Runtime from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Runtime>{100}</Runtime>);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Runtime component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render zero hours and minutes', () => {
    renderer.render(<Runtime>{0}</Runtime>);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
