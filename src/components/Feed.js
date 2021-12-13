import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed } from '../redux/feed/feed';

const Feed = () => {
  const feed = useSelector((state) => state.feeds.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed);
  }, []);

  return (
    <div>
      <h2>{feed}</h2>
    </div>
  );
};

export default Feed;
