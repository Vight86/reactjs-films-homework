import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../index';

const setUp = (name) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name={name} />);
  return renderer.getRenderOutput();
};

describe('render Signature component', () => {
  it('tag should be span', () => {
    const result = setUp();
    expect(result.type).toBe('span');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result.props.children).toBe('Vova Pekun');
  });

  it('render component with props', () => {
    const result = setUp('Vova');
    expect(result.props.children).toBe('Vova');
  });
});
