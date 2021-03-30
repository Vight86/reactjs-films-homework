import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Logo from '../index';

const setUp = (prop) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Logo theme={prop} />);
  return renderer.getRenderOutput();
};

describe('render Logo component', () => {
  it('should be paragraph', () => {
    const result = setUp();
    expect(result.type).toBe('p');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result.props.className).toBe('primary');
  });

  it('render component with props', () => {
    const result = setUp('secondary');
    expect(result.props.className).toBe('secondary');
  });

  it('render right component title', () => {
    const result = setUp();
    expect(result.props.children.toLowerCase()).toBe('films');
  });
});
