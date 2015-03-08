import Brain from './brain';

export default class Creature {
  constructor(main) {
    console.log('Creature init');
    this.brain = new Brain({
      inputs : [
        //Creature X
        //Creature Y
        //Creature Rotation
        //Creature Velocity
      ],
      outputs : [
        //Creature Rotation modifier
        //Creature speed modifier
      ],
      neuron_count : main._settings.brain.neurons,
      synapse_count : main._settings.brain.synapses
    });
  }

  update() {
    //Update brain
    //Update velocity
    //Update rotation
    //Update location
  }
}