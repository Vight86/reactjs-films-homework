import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SelectButton from '../index';

const setUp = (genres) => {
  const renderer = new ShallowRenderer();
  renderer.render(<SelectButton genres={genres} />);
  return renderer.getRenderOutput();
};

describe('render SelectButton component', () => {
  it('should be span tag', () => {
    const result = setUp();
    expect(result.type).toBe('span');
  });

  it('should have 3 default child elements', () => {
    const result = setUp();
    expect(result.props.children).toHaveLength(3);
  });
});
