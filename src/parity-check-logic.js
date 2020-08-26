import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const findRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = (name) => {

  const count_of_loops = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < count_of_loops; i++) {
    сonst max_number = 100;
    const number = getRandomInt(max_number);

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correct_answer = findRightAnswer(number);

    if (answer === correct_answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct_answer}".\nLet's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}`);
  return true;
};

export default game;
