import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchForm from '../index';

let mockHandleSearchSubmit;
let renderer;
let result;

beforeEach(() => {
  mockHandleSearchSubmit = jest.fn();
  renderer = new ShallowRenderer();
  renderer.render(<SearchForm handleSearchSubmit={mockHandleSearchSubmit} />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockHandleSearchSubmit.mockClear();
  renderer = null;
  result = null;
});

describe('render SearchForm component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('handle onChange event correctly', () => {
    const [input] = result.props.children;
    const mockEvent = { target: { value: 'test' } };
    input.props.onChange(mockEvent);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('handle submit event correctly', () => {
    result.props.onSubmit();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
