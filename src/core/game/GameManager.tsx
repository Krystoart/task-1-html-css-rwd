import React, { ReactElement } from 'react';

export function GameManager(): ReactElement {
  return (
    <div>
      <p>
        Guessing game
      </p>
      <p>
        The computer will generate a random number between 1 and 100 and you,
        the user, has to guess the number! You have 10 tries to guess the number!
      </p>
      <input/>
    </div>
  );
}
