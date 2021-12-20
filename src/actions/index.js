import axios from 'axios';
import { toast } from 'react-toastify';

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const getUser = (userInfo) => (dispatch) => {
  axios
    .post('https://ancient-meadow-09395.herokuapp.com/api/v1/login', userInfo)
    .then((response) => response)
    .then((data) => {
      if (data.data.error) return toast.error('Invalid user');
      localStorage.setItem('token', data.token);
      return dispatch(setUser(data.data)) && toast.success(`Hello ${data.data.user.username}!`);
    })
    .catch((err) => err);
};

export const signUserUp = (userInfo) => (dispatch) => {
  axios
    .post('https://ancient-meadow-09395.herokuapp.com/api/v1/users', userInfo)
    .then((response) => response)
    .then((data) => {
      localStorage.setItem('token', data.token);

      if (data.data.error) return toast.error('Error, try again');
      return dispatch(setUser(data.data)) && toast.success('Signup successful');
    })
    .catch((err) => err);
};

export const fetchSprint = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_SPRINT_REQUEST',
    });
    const response = await axios.get('https://ancient-meadow-09395.herokuapp.com/api/v1/sprints');

    dispatch({
      type: 'FETCH_SPRINT_SUCCESS',
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: 'STOCK_LIST_FAIL',
    });
  }
};

export const fetchsingleSprint = (sprint) => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_SINGLE_SPRINT_REQUEST',
    });

    dispatch({
      type: 'FETCH_SINGLE_SPRINT_SUCCESS',
      payload: [sprint],
    });
  } catch (e) {
    dispatch({
      type: 'STOCK_SINGLE_LIST_FAIL',
    });
  }
};
