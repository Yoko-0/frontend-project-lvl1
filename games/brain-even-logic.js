import game from '../src/index.js';
import { randInt } from '../src/utils.js';

const findRightAnswer = (question) => {
  if (Number(question) % 2 === 0) {
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
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameResult = game(rules, generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
