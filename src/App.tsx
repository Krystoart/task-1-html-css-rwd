import { Footer } from 'core/root/Footer';
import { Header } from 'core/root/Header';
import { ReactRouter } from 'core/root/ReactRouter';
import React from 'react';
import './scss/App.scss';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <ReactRouter />
      <Footer />
    </>
  );
}

export { App };
