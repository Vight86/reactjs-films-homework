import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Logo from '../index';

const setUp = (theme) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Logo theme={theme} />);
  return renderer.getRenderOutput();
};

describe('render Logo component', () => {
  it('render without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render with props', () => {
    const result = setUp('test');
    expect(result).toMatchSnapshot();
  });
});
