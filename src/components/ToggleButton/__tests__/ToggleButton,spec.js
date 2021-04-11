import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ToggleButton from '../index';

const setUp = (className) => {
  const renderer = new ShallowRenderer();
  renderer.render(<ToggleButton className={className} />);
  return renderer.getRenderOutput();
};

describe('render toggleGridButton component', () => {
  it('should be button tag', () => {
    const result = setUp();
    expect(result.type).toBe('button');
  });

  it('should have inner mask layer', () => {
    const result = setUp();
    const span = result.props.children;
    expect(span.type).toBe('span');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result.props.className).toMatch(/toggleGridButton/);
  });

  it('render component with props', () => {
    const result = setUp('testClass');
    expect(result.props.className).toMatch(/testClass/);
  });

  it('render onClick event properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ToggleButton />);
    let result = renderer.getRenderOutput();
    const mockValue = true;
    result.props.onClick(mockValue);
    result = renderer.getRenderOutput();
    expect(result.props.className).not.toMatch(/active/);
  });
});
