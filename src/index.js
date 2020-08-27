import readlineSync from 'readline-sync';

export const randInt = (from, to) => from + Math.floor(Math.random() * (to - from));

const answerValidation = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);

const gameOver = (name, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  return false;
};

const gameWin = (name) => {
  console.log(`Congratulations, ${name}!`);
  return true;
};

export const mainLoop = (countOfLoops, name, getQuestion, findRightAnswer) => {
  for (let i = 0; i < countOfLoops; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = findRightAnswer(question);

    if (!answerValidation(userAnswer, correctAnswer)) {
      return gameOver(name, userAnswer, correctAnswer);
    }
    console.log('Correct!');
  }
  return gameWin(name);
};
