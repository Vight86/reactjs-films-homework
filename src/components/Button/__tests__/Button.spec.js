import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../index';

let mockOnclick;
let renderer;
let result;

beforeEach(() => {
  mockOnclick = jest.fn();
  renderer = new ShallowRenderer();
  renderer.render(<Button className="primary" onClick={mockOnclick}>test</Button>);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockOnclick.mockClear();
  renderer = null;
  result = null;
});

describe('render Button component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render onClick event correctly', () => {
    result.props.onClick();
    expect(mockOnclick).toHaveBeenCalled();
  });
});
