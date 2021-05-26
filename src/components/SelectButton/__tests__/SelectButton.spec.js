import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SelectButton from '../index';

const mockUseRouteMatchObject = {
  url: '/1',
  params: { id: '1' },
};
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: jest.fn(() => mockUseRouteMatchObject),
}));

const mockGenres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Scifi' },
];

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <SelectButton genres={mockGenres}>
      Title
    </SelectButton>,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render SelectButton component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render component correctly without movie id', () => {
    mockUseRouteMatchObject.params.id = '';
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render select genre opening click correctly', () => {
    const filterButton = result.props.children[0];
    filterButton.props.onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render select genre button active state correctly', () => {
    mockUseRouteMatchObject.url = 'test';
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render handleClick correctly', () => {
    const selectOption = result.props.children[2].props.children[0].props;
    const { onClick } = selectOption.children.props;
    onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
