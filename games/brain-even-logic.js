import { mainLoop, randInt } from '../src/index.js';
import greet from '../src/cli.js';

const findRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  return randInt(minNumber, maxNumber);
};

const play = () => {
  const countOfLoops = 3;

  const name = greet();

  const gameResult = mainLoop(countOfLoops, name, getQuestion, findRightAnswer);

  return gameResult;
};

export default play;
