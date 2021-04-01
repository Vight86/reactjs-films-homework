import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../Footer';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  return renderer.getRenderOutput();
};

describe('renders Footer correctly', () => {
  it('should be footer tag', () => {
    const result = setUp();
    expect(result.type).toBe('footer');
  });

  it('should render children correctly', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });
});
