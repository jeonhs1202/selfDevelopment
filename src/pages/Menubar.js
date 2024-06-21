import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to = '/home'>HOME</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;