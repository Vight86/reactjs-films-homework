import store from '../store';

describe('testing redux store', () => {
  it('redux store is setup correctly', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
