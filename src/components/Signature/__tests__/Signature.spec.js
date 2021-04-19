import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../index';

const setUp = (name) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name={name} />);
  return renderer.getRenderOutput();
};

describe('render Signature component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp('Vova');
    expect(result).toMatchSnapshot();
  });
});
