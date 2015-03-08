import Helpers from './helpers';

export default class Neuron {
  constructor() {
    console.log('Neuron init');
    var h = new Helpers();
    //Position
    this.radius = 3;

    this.position = {
      x : h.randomInRange(0.2,0.8),
      y : h.randomInRange(0.2,0.8)
    }
    //Last spike
    //Current potential
  }

  update() {

  }
}