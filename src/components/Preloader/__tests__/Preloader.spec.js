import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Preloader from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Preloader />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Preloader component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
