
import Neuron  from './neuron';
import Synapse from './synapse';

export default class Brain {
  constructor(settings) {
    console.log('Brain init');
    this._settings = settings;

    //Build a brain
    this.neurons  = [];
    this.synapses = [];

    var i = 0;
    //Construct inputs
    //Construct outputs
    //Construct neurons
    i = settings.neuron_count;
    while(i--) {
      this.neurons.push(new Neuron());
    }
    //Construct synapses
    i = settings.synapse_count;
    while(i--) {
      this.synapses.push(new Synapse());
    }
  }

  update() {

  }
}