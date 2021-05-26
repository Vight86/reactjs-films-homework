import React from 'react';
import Renderer, { act } from 'react-test-renderer';
import MovieDetailsPage from '../MovieDetailsPage';

let mockCurrentMovieDetails;
let mockHandleModalToggle;
let result;

beforeEach(() => {
  mockCurrentMovieDetails = {
    title: 'test title',
    backdroPath: '/path',
    genres: [{ id: 1, name: 'Action' }],
    runtime: 100,
    voteAverage: 10,
    overview: 'test overview',
  };

  mockHandleModalToggle = jest.fn();

  result = Renderer.create(
    <MovieDetailsPage
      id="1"
      currentMovieDetails={mockCurrentMovieDetails}
      isModalOpened={false}
      handleModalToggle={mockHandleModalToggle}
    />,
  );
});

afterEach(() => {
  mockCurrentMovieDetails = null;
  mockHandleModalToggle.mockClear();
  result = null;
});

describe('render MovieDetailsPage component', () => {
  it('render correctly', () => {
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('render <View Info> button clicks correctly', () => {
    const viewInfoButton = result.root.findByProps({ children: 'View Info' });
    act(() => viewInfoButton.props.onClick());
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('render <Watch Now> button clicks correctly', () => {
    const watchNowButton = result.root.findByProps({ children: 'Watch Now' });
    act(() => watchNowButton.props.onClick());
    expect(mockHandleModalToggle).toHaveBeenCalled();
  });
});
