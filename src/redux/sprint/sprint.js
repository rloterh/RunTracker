const defaultState = {
  loading: false,
  data: [{}],
  errorMsg: '',
};

const sprintReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_SPRINT_REQUEST':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'FETCH_SPRINT_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to retrieve sprint data',
      };
    case 'FETCH_SPRINT_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: action.payload,
      };
    default:
      return state;
  }
};

export default sprintReducer;
