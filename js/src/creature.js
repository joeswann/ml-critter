import Brain from './brain';

export default class Creature {
  constructor() {
    console.log('Creature init');
    this.brain = new Brain();
  }
}