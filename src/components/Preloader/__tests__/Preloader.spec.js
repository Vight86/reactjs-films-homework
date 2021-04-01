import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Preloader from '../index';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Preloader />);
  return renderer.getRenderOutput();
};

describe('render Signature component', () => {
  it('should be div', () => {
    const result = setUp();
    expect(result.type).toBe('div');
  });

  it('render component with chilren', () => {
    const result = setUp();
    expect(result.props.children).toEqual([
      <div className="preloader__circles">
        <span className="preloader__circle" />
        <span className="preloader__circle" />
        <span className="preloader__circle" />
      </div>,
      <p className="preloader__text">Loading</p>,
    ]);
  });
});
