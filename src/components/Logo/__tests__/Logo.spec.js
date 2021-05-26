import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Logo from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Logo className="test">Title</Logo>);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Logo component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
