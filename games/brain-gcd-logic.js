import game from '../src/index.js';
import { randInt } from '../src/utils.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const findRightAnswer = (question) => {
  const questionSplit = question.split(' ');
  const firstNumber = Number(questionSplit[0]);
  const secondNumber = Number(questionSplit[1]);
  return String(gcd(firstNumber, secondNumber));
};

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const firstNumber = randInt(minNumber, maxNumber);
  const secondNumber = randInt(minNumber, maxNumber);
  return `${firstNumber} ${secondNumber}`;
};

const play = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameResult = game(rules, generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
