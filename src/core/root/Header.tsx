import React from 'react';

import './Header.scss';
import '../../utils/StyleUtils.scss';
import { Link } from 'react-router-dom';

export function Header(): React.ReactElement {
  return (
    <nav className="wrapper nav-background-color">
      <div className="logo" />
      <div>
        <div className="button-purple">
          <Link to={{ pathname: '/game' }}>
            <p className="text-white">
              Game
            </p>
          </Link>
        </div>
        <div className="button">
          <Link to={{ pathname: '/' }}>
            <p className="">
              Home
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
