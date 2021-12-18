const initialState = {
  loading: false,
  data: [{}],
  error: '',
};

const sprintReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SPRINT_REQUEST':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'GET_SPRINT_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Sprint data fetch faild',
      };
    case 'GET_SPRINT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload,
      };
    default:
      return state;
  }
};

export default sprintReducer;
