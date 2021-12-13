import getInitialFeed from '../../utilities/getData';

// Initial State
const initialState = {
  feed: '',
};

// Action
export const GET_FEED_REQUEST = 'feed/GET_FEED_REQUEST';

// Action Creators
export const getFeed = async (dispatch) => {
  const feed = await getInitialFeed();
  return dispatch({
    type: GET_FEED_REQUEST,
    payload: feed,
  });
};

// Reducer
const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED_REQUEST:
      return { ...state, feed: action.payload };

    default:
      return state;
  }
};

export default feedReducer;
