export const randInt = (from, to) => from + Math.floor(Math.random() * (to - from));
export const randChoice = (array) => array[randInt(0, array.length)];

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};


export const generateProgression = (first, step, length) => {
  let progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + i * step);
  }
  return progression;
}

export const isPrime = (number) => {
  if(number === 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}
