import reducer from '../redux/sprint/sprint';

describe('Sprint reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: [{}],
      errorMsg: '',
    });
  });

  it('should handle FETCH_SPRINT_REQUEST', () => {
    expect(
      reducer([], {
        type: 'FETCH_SPRINT_REQUEST',
      }),
    ).toEqual({
      loading: true,
      errorMsg: '',
    });
  });

  it('should handle FETCH_SPRINT_FAIL', () => {
    expect(
      reducer([], {
        type: 'FETCH_SPRINT_FAIL',
      }),
    ).toEqual({
      loading: false,
      errorMsg: 'Unable to retrieve sprint data',
    });
  });

  it('should handle FETCH_SPRINT_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'FETCH_SPRINT_SUCCESS',
      }),
    ).toEqual({
      loading: false,
      errorMsg: '',
      data: undefined,
    });
  });
});
