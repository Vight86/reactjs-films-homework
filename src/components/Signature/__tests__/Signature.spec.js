import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../Signature';

const setUp = (name) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name={name} />);
  return renderer.getRenderOutput();
};

describe('render Signature component', () => {
  it('should be div', () => {
    const result = setUp();
    expect(result.type).toBe('div');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp('Vova');
    expect(result).toMatchSnapshot();
  });
});
