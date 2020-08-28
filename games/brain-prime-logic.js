import game from '../src/index.js';
import { randInt } from '../src/utils.js';

const findRightAnswer = (question) => {
  for (let i = 2; i < Number(question); i += 1) {
    if (Number(question) % i === 0) return 'no';
  }
  return 'yes';
};

const generateQuestion = () => {
  const minNumber = 2;
  const maxNumber = 100;
  return randInt(minNumber, maxNumber);
};

const play = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameResult = game(rules, generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
