import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
}));

let renderer;
let result;
beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<App />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render App component', () => {
  it('App renders correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('App renders handleSearchSubmit correctly', () => {
    const searchForm = result.props.children[0].props.children[1];
    const mockQuery = 'test';
    const mockEvent = { preventDefault: jest.fn() };
    searchForm.props.handleSearchSubmit(mockQuery, mockEvent);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
