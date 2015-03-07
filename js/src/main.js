import Draw from './draw';
import Environment from './environment';
import Brain from './brain';

export default class Main {
  constructor() {
    console.log('Main init');

    //Engine
    this._run   = true;
    this._frame = 0;
    this._stop  = 1000;

    //Environment
    this._env = {
      obstacle_count : 10,
      target_count : 10
    }

    //Brain
    this._brain = {
      neuron_count : 100,
      synapse_count : 1000
    }

    //Classes
    this.env   = new Environment(this);
    this.brain = new Brain(this);
    this.draw  = new Draw(this);

    //Initialise classes

    //Start simulation
    this.loop(); 
  } 

  loop() {
    
    this.draw.update();

    //Handle frame
    this._frame++;
    if(this._frame > this._stop) this._run = false;
    if(this._run) window.requestAnimationFrame(this.loop());
  }
}   