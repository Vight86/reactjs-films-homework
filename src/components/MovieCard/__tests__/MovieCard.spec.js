import React from 'react';
import Renderer, { act } from 'react-test-renderer';
import MovieCard from '../index';
import image from '../movieStab.jpg';

const data = {
  image,
  title: 'Independance day',
  rating: '3.9',
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
    expect(result).toMatchSnapshot();
  });

  it('render component with props', () => {
    const result = setUp(data);
    expect(result).toMatchSnapshot();
  });

  it('render View Info button clicks properly', () => {
    const result = setUp();
    const infoBlock = result.root.findByProps({ className: 'infoBlock' });
    const viewInfoButton = result.root.findByProps({ children: 'View Info' });
    act(() => viewInfoButton.props.onClick());
    expect(infoBlock.props.className).toBe('infoBlock infoBlock_active');
  });

  it('render infoBlock closeButton correctly', () => {
    const result = setUp();
    const infoBlock = result.root.findByProps({ className: 'infoBlock' });
    const viewInfoButton = result.root.findByProps({ children: 'View Info' });
    act(() => viewInfoButton.props.onClick());
    const closeButton = result.root.findByProps({ className: 'closeButton' });
    act(() => closeButton.props.onClick());
    expect(infoBlock.props.className).toBe('infoBlock');
  });
});
