import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const trasformAnswer = (answer) => {
  if (answer === 'yes') return 0;
  if (answer === 'no') return 1;
  return answer;
};

const game = (name) => {
  const answers = ['yes', 'no'];
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const x = getRandomInt(100);

    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');
    const correct_answer = x % 2;

    if (trasformAnswer(answer) === correct_answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answers[correct_answer]}".\nLet's try again, Bill!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}`);
  return 1;
};

export default game;
