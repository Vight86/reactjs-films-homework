import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../Footer';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render Footer component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
