import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cover from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Cover className="test"><img src="#" alt="test" /></Cover>);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Button component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
