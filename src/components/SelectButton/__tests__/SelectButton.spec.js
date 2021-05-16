import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SelectButton from '../index';

const mockGenres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Scifi' },
];
const mockFiterMovies = jest.fn(() => 'tested');

let renderer;
let result;
beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <SelectButton
      genres={mockGenres}
      filterMovies={mockFiterMovies}
    >
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
  it('render component correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render handleClick correctly', () => {
    const selectOptionButton = result.props.children[2].props.children[1][1].props.children;
    const mockEvent = {
      target: {
        innerHTML: 'tested',
        dataset: {
          value: '2',
        },
      },
    };
    selectOptionButton.props.onClick(mockEvent);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render filterButton opening click correctly', () => {
    const filterButton = result.props.children[0];
    filterButton.props.onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
