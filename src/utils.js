export const randInt = (from, to) => from + Math.floor(Math.random() * (to - from));
export const randChoice = (array) => array[randInt(0, array.length)];
