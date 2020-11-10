import React, { ReactElement, useState } from 'react';
import { Engine } from './GameEngine';

export function GameManager(): ReactElement {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [showPlayAgain, setShowPlayAgain] = useState<boolean>(false);
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
              value={currentGuess}
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value || re.test(e.target.value)) {
                  setCurrentGuess(Number(e.target.value));
                } else {
                  setCurrentGuess(undefined);
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                // TODO it some components don't update in time - replace with useEffect
                if (currentGuess) {
                  const result = Engine.guessNumber(currentGuess);
                  if (result === 1 && !showPlayAgain) {
                    setHelperText('The guess is too low');
                  } else if (result === -1 && !showPlayAgain) {
                    setHelperText('The guess is too high');
                  } else if (result === 0 && !showPlayAgain) {
                    setHelperText('The guess is correct! Good job!');
                    setShowPlayAgain(true);
                  } else {
                    Engine.resetGame();
                    setShowPlayAgain(true);
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
      {showPlayAgain && (
      <div>
        <button
          type="button"
          onClick={() => {
            Engine.resetGame();
            Engine.generateNumber();
            setShowPlayAgain(false);
            setCurrentGuess(undefined);
            setHelperText('Just make a guess!');
          }}
        > Play again?
        </button>
      </div>
      )}
    </div>
  );
}
