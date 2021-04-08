import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../index';
import image from '../../MovieCard/movieStab.jpg';

const stab = {
  image,
  title: 'Independance day',
  rating: '3.9',
  genre: ['scifi', 'comedy'],
  info: `There are growing dangers in
    the wizarding world of 1926 New York.
    Something mysterious is leaving a path of destruction in the streets,
    threatening to expose the wizarding`,
};

const movies = Array(16).fill(stab);

const setUp = (moviesArr) => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieList movies={moviesArr} />);
  return renderer.getRenderOutput();
};

describe('render MovieList component', () => {
  it('should be main tag', () => {
    const result = setUp();
    expect(result.type).toBe('main');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp(movies);
    expect(result).toMatchSnapshot();
  });
});
