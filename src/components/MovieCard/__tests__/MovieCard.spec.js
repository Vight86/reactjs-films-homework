import React from 'react';
import Renderer, { act } from 'react-test-renderer';
import MovieCard from '../index';
import image from '../movieStab.jpg';

const data = {
  image,
  title: 'Independance day',
  rating: 3.9,
  genre: ['scifi', 'comedy'],
};

const setUp = (movieData) => {
  const renderer = Renderer.create(<MovieCard movieData={movieData} />);
  return renderer;
};

describe('render MovieCard component', () => {
  it('should be article tag', () => {
    const result = setUp();
    expect(result.toJSON().type).toBe('article');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp(data);
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('render View Info button clicks', () => {
    const result = setUp();
    const viewInfoButton = result.root.findByProps({ children: 'View Info' });
    act(() => viewInfoButton.props.onClick());
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('render infoBlock closeButton clicks', () => {
    const result = setUp();
    const viewInfoButton = result.root.findByProps({ children: 'View Info' });
    act(() => viewInfoButton.props.onClick());
    const closeButton = result.root.findByProps({ className: 'closeButton' });
    act(() => closeButton.props.onClick());
    expect(result.toJSON()).toMatchSnapshot();
  });
});
