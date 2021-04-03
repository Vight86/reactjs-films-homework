import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchForm from '../index';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchForm />);
  return renderer.getRenderOutput();
};

describe('render form component', () => {
  it('should be form tag', () => {
    const result = setUp();
    expect(result.type).toBe('form');
  });

  it('should have input field', () => {
    const result = setUp();
    const [input] = result.props.children;
    expect(input.type).toBe('input');
  });

  it('should have submit button', () => {
    const result = setUp();
    const [, button] = result.props.children;
    expect(button.type).toBe('button');
    expect(button.props.type).toBe('submit');
  });

  it('should handle onChange event when use shallow render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchForm />);
    let result = renderer.getRenderOutput();
    let [input] = result.props.children;
    const mockEvent = { target: { value: 'test' } };
    input.props.onChange(mockEvent);
    result = renderer.getRenderOutput();
    [input] = result.props.children;
    expect(input.props.value).toBe('test');
  });
});
