import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({
  home, feed, progress, settings,
}) => (
  <footer>
    <div>
      <Link to={home}>
        <p>Home</p>
      </Link>
    </div>
    <div>
      <Link to={feed}>
        <p>Feed</p>
      </Link>
    </div>
    <div>
      <Link to={progress}>
        <p>Progress</p>
      </Link>
    </div>
    <div>
      <Link to={settings}>
        <p>Settigs</p>
      </Link>
    </div>
  </footer>
);

export default Footer;

Footer.defaultProps = {
  home: '',
  feed: '',
  progress: '',
  settings: '',
};

Footer.propTypes = {
  home: PropTypes.string,
  feed: PropTypes.string,
  progress: PropTypes.string,
  settings: PropTypes.string,
};
