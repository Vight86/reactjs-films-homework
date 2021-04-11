import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ToggleButton from '../index';

const setUp = (className) => {
  const renderer = new ShallowRenderer();
  renderer.render(<ToggleButton className={className} />);
  return renderer.getRenderOutput();
};

describe('render toggleGridButton component', () => {
  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp('testClass');
    expect(result).toMatchSnapshot();
  });
});
