import game from '../src/index.js';
import { randInt } from '../src/utils.js';

const findRightAnswer = (question) => {
  const questionSplit = question.split(' ');
  let step = 0;
  for (let i = 1; i < questionSplit.length - 1; i += 1) {
    if (questionSplit[i - 1] !== '..' && questionSplit[i] !== '..') {
      step = Number(questionSplit[i]) - Number(questionSplit[i - 1]);
    }
  }
  for (let i = 1; i < questionSplit.length - 1; i += 1) {
    if (questionSplit[0] === '..') return String(Number(questionSplit[1]) - step);
    if (questionSplit[i] === '..') return String(Number(questionSplit[i - 1]) + step);
  }

  return null;
};

const generateQuestion = () => {
  const progressionLength = 10;
  const maxStepProgression = 20;
  const hideNumber = randInt(0, progressionLength);
  const step = randInt(1, maxStepProgression);
  const firstNumberOfProgression = randInt(1, maxStepProgression);
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hideNumber) progression += '..';
    else progression += String(firstNumberOfProgression + i * step);
    progression += ' ';
  }
  return progression;
};

const play = () => {
  const rules = 'What number is missing in the progression?';
  const gameResult = game(rules, generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
