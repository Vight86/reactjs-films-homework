import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchResultsPage from '../index';

const setUp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchResultsPage />);
  return renderer.getRenderOutput();
};

describe('render SearchResultsPage component', () => {
  it('should be main tag', () => {
    const result = setUp();
    expect(result.type).toBe('main');
  });

  it('render component without props', () => {
    const result = setUp();
    expect(result).toMatchSnapshot();
  });
});
