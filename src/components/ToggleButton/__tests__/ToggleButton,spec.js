import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ToggleButton from '../index';

let mockhandleGridToggle;
let renderer;
let result;

beforeEach(() => {
  mockhandleGridToggle = jest.fn();
  renderer = new ShallowRenderer();
  renderer.render(
    <ToggleButton
      className="test"
      isGrid={false}
      handleGridToggle={mockhandleGridToggle}

    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockhandleGridToggle.mockClear();
  renderer = null;
  result = null;
});

describe('render toggleGridButton component', () => {
  it('render table view correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render grid view correctly', () => {
    renderer.render(
      <ToggleButton
        className="test"
        isGrid
        handleGridToggle={mockhandleGridToggle}

      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render click correctly', () => {
    result.props.onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
