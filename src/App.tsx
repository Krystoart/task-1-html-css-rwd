import { Footer } from 'core/root/Footer';
import { Header } from 'core/root/Header';
import { ReactRouter } from 'core/root/ReactRouter';
import 'App.scss';
import React from 'react';

function App(): React.ReactElement {
  return (
    <div className="bg-color">
      <Header />
      <ReactRouter />
      <Footer />
    </div>
  );
}

export { App };
