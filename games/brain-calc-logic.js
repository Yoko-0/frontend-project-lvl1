import game from '../src/index.js';
import { randInt, randChoice } from '../src/utils.js';

const applyOperator = (firstNumber, operator, secondNumber) => {
  if (operator === '-') {
    return firstNumber - secondNumber;
  }
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  if (operator === '*') {
    return firstNumber * secondNumber;
  }
  return null;
};

const findRightAnswer = (question) => {
  const questionSplit = question.split(' ');
  const firstNumber = Number(questionSplit[0]);
  const operator = questionSplit[1];
  const secondNumber = Number(questionSplit[2]);
  return String(applyOperator(firstNumber, operator, secondNumber));
};

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const arrayOfOperators = ['+', '-', '*'];
  const firstNumber = randInt(minNumber, maxNumber);
  const operator = randChoice(arrayOfOperators);
  const secondNumber = randInt(minNumber, maxNumber);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

const play = () => {
  const gameResult = game(generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
