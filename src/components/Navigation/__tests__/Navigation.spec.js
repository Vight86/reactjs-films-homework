import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Navigation from '../index';

let mockUseRouteMatchObject;
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: jest.fn(() => mockUseRouteMatchObject),
}));

let mockGenres;
let renderer;
let result;

beforeEach(() => {
  mockUseRouteMatchObject = { params: { id: '111' } };
  mockGenres = [{ id: 1, name: 'Action' }];
  renderer = new ShallowRenderer();
  renderer.render(<Navigation genres={mockGenres} />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockUseRouteMatchObject = null;
  mockGenres = null;
  renderer = null;
  result = null;
});

describe('render Navigation component', () => {
  it('render component correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render if MovieDetailsPage is opened', () => {
    mockUseRouteMatchObject = null;
    renderer.render(<Navigation genres={mockGenres} />);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render mobile menu button clicks', () => {
    const mobMenuButton = result.props.children[0];
    const { onClick } = mobMenuButton.props;
    onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
