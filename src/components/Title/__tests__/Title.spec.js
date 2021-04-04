import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Title from '../index';

const setUp = (className, title) => {
  const renderer = new ShallowRenderer();
  renderer.render(<Title className={className}>{title}</Title>);
  return renderer.getRenderOutput();
};

describe('render Title component', () => {
  it('without className tag should be h1', () => {
    const result = setUp();
    expect(result.type).toBe('h1');
  });

  it('with className secondary tag should be h3', () => {
    const result = setUp('secondary', null);
    expect(result.type).toBe('h3');
  });

  it('without children Title should be empty', () => {
    const result = setUp();
    expect(result.props.children).toBe('');
  });

  it('renders Title string correctly', () => {
    const result = setUp(null, 'test title');
    expect(result.props.children).toBe('test title');
  });

  it('render Title className correctly', () => {
    const result = setUp('test');
    expect(result.props.className).toBe('test');
  });
});
