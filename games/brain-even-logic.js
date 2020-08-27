import game from '../src/index.js';
import { randInt } from '../src/utils.js';

const findRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  return randInt(minNumber, maxNumber);
};

const play = () => {
  const gameResult = game(generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
