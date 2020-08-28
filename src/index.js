import readlineSync from 'readline-sync';
import greet from './cli.js';

const answerValidation = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);

const gameLoss = (name, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
};

const gameWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const game = (rules, getQuestion, findRightAnswer, maxRounds = 3) => {
  const name = greet();
  console.log(rules);
  for (let i = 0; i < maxRounds; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = findRightAnswer(question);

    if (!answerValidation(userAnswer, correctAnswer)) {
      gameLoss(name, userAnswer, correctAnswer);
      return false;
    }
    console.log('Correct!');
  }
  gameWin(name);
  return true;
};

export default game;
