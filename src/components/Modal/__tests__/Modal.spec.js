import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from '../index';

let mockHandleModalToggle;
let renderer;
let result;

beforeEach(() => {
  const container = document.createElement('div');
  container.id = 'modal';
  document.body.appendChild(container);

  mockHandleModalToggle = jest.fn(() => 'test');

  renderer = new ShallowRenderer();
  renderer.render(
    <Modal
      isModalOpened={false}
      movieTrailerKey={null}
      handleModalToggle={mockHandleModalToggle}
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockHandleModalToggle.mockClear();
  renderer = null;
  result = null;
});

describe('render Modal component', () => {
  it('render initial state correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render modal open state correctly', () => {
    renderer.render(
      <Modal
        isModalOpened
        movieTrailerKey="test"
        handleModalToggle={mockHandleModalToggle}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render handleModalToggle correctly', () => {
    renderer.render(
      <Modal
        isModalOpened
        movieTrailerKey="test"
        handleModalToggle={mockHandleModalToggle}
      />,
    );
    result = renderer.getRenderOutput();
    const closeButton = result.children.props.children.props.children[0];
    closeButton.props.onClick();
    expect(mockHandleModalToggle).toHaveBeenCalled();
  });
});
