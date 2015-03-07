import Creature from './creature';

export default class Environment {
  constructor() {
    console.log('Environment init');
    this.creature = new Creature();
  }
}