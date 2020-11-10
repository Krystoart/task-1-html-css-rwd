class Engine {
  constraintMin: number;

  constaintMax: number;

  numberToGuess: number;

  maxAttempts: number;

  attemptsLeft: number;

  constructor() {
    this.constraintMin = 1;
    this.constaintMax = 100;
    this.numberToGuess = -1;
    this.maxAttempts = 10;
    this.attemptsLeft = 0;
  }

  generateNumber = (): void => {
    this.numberToGuess = Math.floor(Math.random() * this.constaintMax + this.constraintMin);
    this.attemptsLeft = this.maxAttempts;
  };

  guessNumber = (guess: number): number | undefined => {
    if (this.attemptsLeft > 0 && this.numberToGuess) {
      if (guess > this.numberToGuess) {
        this.attemptsLeft -= 1;
        return 1;
      }
      if (guess < this.numberToGuess) {
        this.attemptsLeft -= 1;
        return -1;
      }

      this.attemptsLeft = 0;
      return 0;
    }
    return undefined;
  };
}

const engineInstance = new Engine();
export { engineInstance as Engine };
