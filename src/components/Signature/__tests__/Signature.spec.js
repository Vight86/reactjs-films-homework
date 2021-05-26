import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Signature name="test" />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Signature component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
