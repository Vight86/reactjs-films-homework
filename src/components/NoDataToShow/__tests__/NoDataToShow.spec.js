import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NoDataToShow from '../index';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<NoDataToShow />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render NoDataToShow component', () => {
  it('render component correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
