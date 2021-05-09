import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from '../index';

const mockFn = jest.fn(() => 'clickHandled');

const setUp = (isModalOpened, movieTrailerKey, handleModalToggle) => {
  const container = document.createElement('div');
  container.id = 'modal';
  document.body.appendChild(container);

  const renderer = new ShallowRenderer();
  renderer.render(
    <Modal
      isModalOpened={isModalOpened}
      movieTrailerKey={movieTrailerKey}
      handleModalToggle={handleModalToggle}
    />,
  );
  return renderer.getRenderOutput();
};

describe('render Modal component', () => {
  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp(true, 'testKey', mockFn);
    expect(result).toMatchSnapshot();
  });

  it('render handleModalToggle correctly', () => {
    const container = document.createElement('div');
    container.id = 'modal';
    document.body.appendChild(container);

    const renderer = new ShallowRenderer();
    renderer.render(
      <Modal
        isModalOpened
        movieTrailerKey="testKey"
        handleModalToggle={mockFn}
      />,
    );

    const result = renderer.getRenderOutput();
    const closeButton = result.children.props.children.props.children[0];
    closeButton.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });
});
