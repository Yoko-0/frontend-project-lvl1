import { mainLoop, randInt } from '../src/index.js';
import greet from '../src/cli.js';

const findRightAnswer = (question) => {
  const questionSplit = question.split(' ');
  const firstNumber = parseInt(questionSplit[0], 10);
  const operator = questionSplit[1];
  const secondNumber = parseInt(questionSplit[2], 10);
  let answer = '';
  if (operator === '-') {
    answer = firstNumber - secondNumber;
  } else if (operator === '+') {
    answer = firstNumber + secondNumber;
  } else if (operator === '*') {
    answer = firstNumber * secondNumber;
  }
  return answer.toString();
};

const getQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const arrayOfOperators = ['+', '-', '*'];
  const firstNumber = randInt(minNumber, maxNumber);
  const operator = arrayOfOperators[randInt(0, arrayOfOperators.length)];
  const secondNumber = randInt(minNumber, maxNumber);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

const play = () => {
  const countOfLoops = 3;

  const name = greet();

  const gameResult = mainLoop(countOfLoops, name, getQuestion, findRightAnswer);

  return gameResult;
};

export default play;
