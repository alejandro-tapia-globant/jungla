export const getRandomInt = (min: number, max: number) => {
  // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
export const BASE_ENERGY = 15;

export const say = (message: string, species:string, error: string = "") => {
  if (!message) return;
  const print = error ? console.error : console.info;
  print(`${species} says: ${message}`);
};