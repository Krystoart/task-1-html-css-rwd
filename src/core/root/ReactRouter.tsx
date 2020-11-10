import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { GameManager } from 'core/game/GameManager';
import { Home } from 'core/home/Home';

export function ReactRouter(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/game">
        <GameManager />
      </Route>
    </Switch>
  );
}
