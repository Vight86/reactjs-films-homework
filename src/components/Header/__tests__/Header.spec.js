import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <Header className="test">
      <h1>title</h1>
    </Header>,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Header component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
