const initialState = {
  loading: false,
  data: [],
  error: '',
};

const singleSprintReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SINGLE_SPRINT_REQUEST':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'GET_SINGLE_SPRINT_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Unable to retrieve sprint data',
      };
    case 'GET_SINGLE_SPRINT_SUCCESS':
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

export default singleSprintReducer;
