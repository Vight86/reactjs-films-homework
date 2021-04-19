import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchForm from '../index';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchForm />);
  return renderer.getRenderOutput();
};

describe('render form component', () => {
  it('render component correctly', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('handle onChange event correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchForm />);
    let result = renderer.getRenderOutput();
    const [input] = result.props.children;
    const mockEvent = { target: { value: 'test' } };
    input.props.onChange(mockEvent);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
