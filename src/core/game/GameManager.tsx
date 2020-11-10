import React, { ReactElement, useState } from 'react';
import { Engine } from './GameEngine';

export function GameManager(): ReactElement {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentGuess, setCurrentGuess] = useState<number>();
  const [helperText, setHelperText] = useState<string>('Just make a guess!');

  return (
    <div>
      <p>
        Guessing game
      </p>
      <p>
        The computer will generate a random number between 1 and 100 and you,
        the user, has to guess the number! You have 10 tries to guess the number!
      </p>
      {isStarted
        ? (
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="guess">Write your guess here: </label>
            <input
              type="text"
              name="guess"
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value || re.test(e.target.value)) {
                  setCurrentGuess(Number(e.target.value));
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                if (currentGuess) {
                  const result = Engine.guessNumber(currentGuess);
                  if (result === 1) {
                    setHelperText('The guess is too low');
                  } else if (result === -1) {
                    setHelperText('The guess is too high');
                  } else {
                    setHelperText('The guess is correct! Good job!');
                    Engine.resetGame();
                  }
                }
              }}
            > Guess!
            </button>
            <p>{ helperText }</p>
            <p>Attempts left: <span>{Engine.attemptsLeft}</span></p>
          </div>
        )
        : (
          <div>
            <button
              type="button"
              onClick={() => {
                Engine.generateNumber();
                setIsStarted(true);
              }}
            > Start game!
            </button>
          </div>
        )}
    </div>
  );
}
