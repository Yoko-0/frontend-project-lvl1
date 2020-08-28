import game from '../src/index.js';
import { randInt, isPrime } from '../src/utils.js';

const findRightAnswer = (question) => {
  return isPrime(Number(question)) ? 'yes' : 'no';
};

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  return randInt(minNumber, maxNumber);
};

const play = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameResult = game(rules, generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
