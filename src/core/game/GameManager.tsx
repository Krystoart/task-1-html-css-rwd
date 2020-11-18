import React, { ReactElement, useState } from 'react';
import { Engine } from './GameEngine';

import '../../utils/StyleUtils.scss';
import './GameManager.scss';

export function GameManager(): ReactElement {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [showPlayAgain, setShowPlayAgain] = useState<boolean>(false);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [attemptsLeft, setAttemptsLeft] = useState<number>();
  const [helperText, setHelperText] = useState<string>('Just make a guess!');

  return (
    <div className="row align-center">
      <div className="game-wrapper">
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
                  if (e.target.value && re.test(e.target.value)) {
                    setCurrentGuess(e.target.value);
                  } else if (!e.target.value) {
                    setCurrentGuess('');
                  } else {
                    setCurrentGuess(currentGuess);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (currentGuess) {
                    const result = Engine.guessNumber(Number(currentGuess));

                    if (result || result === 0) {
                      if (result === 2) {
                        setHelperText('You lost, too bad :D');
                        setShowPlayAgain(true);
                        setAttemptsLeft(Engine.attemptsLeft);
                        Engine.resetGame();
                      } else {
                        if (result === 1) {
                          setHelperText('The guess is too low');
                        } else if (result === -1) {
                          setHelperText('The guess is too high');
                        } else if (result === 0) {
                          setHelperText('The guess is correct! Good job!');
                          setShowPlayAgain(true);
                        }
                        setAttemptsLeft(Engine.attemptsLeft);
                      }
                    } else {
                      setHelperText('Some error occured');
                      setShowPlayAgain(true);
                      Engine.resetGame();
                    }
                  }
                }}
              > Guess!
              </button>
              <p>{ helperText }</p>
              <p>Attempts left: <span>{attemptsLeft}</span></p>
            </div>
          )
          : (
            <div>
              <button
                type="button"
                onClick={() => {
                  Engine.generateNumber();
                  setAttemptsLeft(Engine.attemptsLeft);
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
              Engine.generateNumber();
              setShowPlayAgain(false);
              setCurrentGuess('');
              setHelperText('Just make a guess!');
              setAttemptsLeft(Engine.attemptsLeft);
            }}
          > Play again?
          </button>
        </div>
        )}
      </div>
    </div>
  );
}
