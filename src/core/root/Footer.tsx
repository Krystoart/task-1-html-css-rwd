import React from 'react';

import './Footer.scss';

export function Footer(): React.ReactElement {
  return (
    <footer className="footer-row wrapper">
      <div className="fake-pic" />
      <div className="row middle-text">
        <p>© Lorem ipsum 2019</p>
        <p>Lorem</p>
        <p>Ipsum</p>
        <p>consectetur</p>
      </div>
      <div className="row">
        <i className="fab fa-facebook-square" />
        <i className="fab fa-instagram" />
      </div>
    </footer>
  );
}
