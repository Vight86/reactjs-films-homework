import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ToggleButton from '../index';

const mockhandleGridToggle = jest.fn(() => 'tested');

let renderer;
let result;

beforeEach(() => {
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
  renderer = null;
  result = null;
});

describe('render toggleGridButton component', () => {
  it('render component table view correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render component grid view correctly', () => {
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
