import game from '../src/index.js';
import { randInt, generateProgression } from '../src/utils.js';

const findRightAnswer = (question) => {
  const questionSplit = question.split(' ').map((x) => x === '..' ? x : Number(x));
  let step = 0;
  for (let i = 1; i < questionSplit.length; i += 1) {
    if (questionSplit[i - 1] !== '..' && questionSplit[i] !== '..') {
      step = questionSplit[i] - questionSplit[i - 1];
      break;
    }
  }
  if (questionSplit[0] === '..') return String(questionSplit[1] - step);
  return String(questionSplit[questionSplit.indexOf('..') - 1] + step);

};

const generateQuestion = () => {
  const length = 10;
  const maxStep = 20;
  const replacementIndex = randInt(0, length);
  const step = randInt(1, maxStep);
  const first = randInt(1, maxStep);
  let progression = generateProgression(first, step, length);
  progression[replacementIndex] = '..';
  return progression.join(' ');
};

const play = () => {
  const rules = 'What number is missing in the progression?';
  const gameResult = game(rules, generateQuestion, findRightAnswer);

  return gameResult;
};

export default play;
