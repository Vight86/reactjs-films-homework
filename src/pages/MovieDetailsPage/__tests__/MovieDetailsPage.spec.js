import React from 'react';
import Renderer, { act } from 'react-test-renderer';
import MovieDetailsPage from '../index';

const setUp = () => {
  const renderer = Renderer.create(<MovieDetailsPage />);
  return renderer;
};

describe('render MovieDetailsPage component', () => {
  it('render component correctly', () => {
    const result = setUp();
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('render <View Info> button clicks correctly', () => {
    const result = setUp();
    const viewInfoButton = result.root.findByProps({ children: 'View Info' });
    act(() => viewInfoButton.props.onClick());
    expect(result.toJSON()).toMatchSnapshot();
    act(() => viewInfoButton.props.onClick());
    expect(result.toJSON()).toMatchSnapshot();
  });
});
