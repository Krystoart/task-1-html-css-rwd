import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { GameManager } from 'game/GameManager';
import { Home } from 'home/Home';
import { CrudManager } from 'crud/CrudManager';

export function ReactRouter(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/game">
        <GameManager />
      </Route>
      <Route exact path="/crud">
        <CrudManager />
      </Route>
    </Switch>
  );
}
