const initialState = {
  signedIn: false,
  data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        signedIn: true,
        data: { ...action.payload },
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        signedIn: false,
        data: {},
      };
    default:
      return state;
  }
};

export default userReducer;
