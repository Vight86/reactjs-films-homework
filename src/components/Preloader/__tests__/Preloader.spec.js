import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Preloader from '../index';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Preloader />);
  return renderer.getRenderOutput();
};

describe('render Preloader component', () => {
  it('render component correctly', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });
});
