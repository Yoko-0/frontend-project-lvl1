import readlineSync from 'readline-sync';

export const greet = () => {

  const name = readlineSync.question('HELLOU POPROSHU POITY NA HUI\nNO SNACHALA SUKA SKAGI SVOE IMYA: ');
  console.log(`POSHEL NAHUI ${name} SASI HUI!`);
  return name;
  
}
