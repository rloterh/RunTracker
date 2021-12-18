import axios from 'axios';

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const getUser = (userInfo) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/login', userInfo)
    .then((response) => response)
    .then((data) => {
      localStorage.setItem('token', data.token);
      return dispatch(setUser(data.data));
    })
    .catch((error) => error);
};

export const signUserUp = (userInfo) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/users', userInfo)
    .then((response) => response)
    .then((data) => {
      localStorage.setItem('token', data.token);
      return dispatch(setUser(data.data));
    })
    .catch((error) => error);
};

export const getSprint = () => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_SPRINT_REQUEST',
    });
    const response = await axios.get('http://localhost:3000/api/v1/sprints');

    dispatch({
      type: 'GET_SPRINT_SUCCESS',
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: 'LISTS_FAIL',
    });
  }
};

export const getSingleSprint = (sprint) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_SINGLE_SPRINT_REQUEST',
    });

    dispatch({
      type: 'GET_SINGLE_SPRINT_REQUEST',
      payload: [sprint],
    });
  } catch (e) {
    dispatch({
      type: 'SINGLE_LIST_FAIL',
    });
  }
};
