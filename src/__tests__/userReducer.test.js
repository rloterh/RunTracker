import reducer from '../redux/user/user';

describe('Sprint reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loggedIn: false,
      data: {},
    });
  });

  it('should handle SET_USER', () => {
    expect(
      reducer([], {
        type: 'SET_USER',
      }),
    ).toEqual({
      loggedIn: true,
      data: {},
    });
  });

  it('should handle LOG_OUT', () => {
    expect(
      reducer([], {
        type: 'LOG_OUT',
      }),
    ).toEqual({
      loggedIn: false,
      data: {},
    });
  });
});
