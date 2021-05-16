import { STATUS_UPDATED } from '../statusActions';

import statusReducer, {
  updateStatus,
  selectStatus,
} from '../index';

let initialState;
let expectedState;
let mockStatus;
let expectedAction;

beforeEach(() => {
  initialState = {
    status: 'loading',
  };

  expectedState = {
    status: 'testStatus',
  };

  mockStatus = 'testStatus';
  expectedAction = {
    type: STATUS_UPDATED,
    payload: {
      status: mockStatus,
    },
  };
});

afterEach(() => {
  initialState = null;
  expectedState = null;
  mockStatus = null;
  expectedAction = null;
});
describe('test status module actions', () => {
  it('handles updateStatus action correctly', () => {
    expect(updateStatus(mockStatus)).toEqual(expectedAction);
  });
});

describe('test statusReducer actions', () => {
  it('returns default state correctly', () => {
    expect(statusReducer(undefined, {})).toEqual(initialState);
  });

  it('handles updateStatus correctly', () => {
    expect(statusReducer(initialState, expectedAction)).toEqual(expectedState);
  });
});

describe('test status module selectors', () => {
  it('handles selectStatus correctly', () => {
    expect(selectStatus(initialState)).toBe(initialState.status);
  });
});
