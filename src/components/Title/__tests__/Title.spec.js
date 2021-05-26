import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Title from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Title className="primary">Test Title</Title>);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Title component', () => {
  it('render className secondary correctly', () => {
    renderer.render(<Title className="secondary">Test Title</Title>);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
