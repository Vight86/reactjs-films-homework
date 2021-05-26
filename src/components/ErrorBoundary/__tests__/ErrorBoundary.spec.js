import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorBoundary from '../index';

const MockReactElem = () => <div>Test</div>;

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <ErrorBoundary>
      <MockReactElem />
    </ErrorBoundary>,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('test ErrorBoundary component', () => {
  it('renders component correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('component catches errors correctly', () => {
    const errorBoundary = new ErrorBoundary();
    const mockSetState = jest.fn();
    errorBoundary.setState = mockSetState;
    errorBoundary.componentDidCatch();
    expect(mockSetState).toHaveBeenCalled();
  });

  it('component renders correctly after errors are cought', () => {
    const errorBoundary = new ErrorBoundary();
    errorBoundary.state.error = true;
    expect(errorBoundary.render()).toMatchSnapshot();
  });
});
