const defaultState = {
  loggedIn: false,
  data: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        loggedIn: true,
        data: { ...action.payload },
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        loggedIn: false,
        data: {},
      };
    default:
      return state;
  }
};

export default userReducer;
