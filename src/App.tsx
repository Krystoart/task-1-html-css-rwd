import { Footer } from 'core/Footer';
import { Header } from 'core/Header';
import { ReactRouter } from 'core/ReactRouter';
import 'App.scss';
import React from 'react';

function App(): React.ReactElement {
  return (
    <div className="main-wrapper">
      <Header />
      <ReactRouter />
      <Footer />
    </div>
  );
}

export { App };
