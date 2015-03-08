export default class Helpers {
  randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
} 