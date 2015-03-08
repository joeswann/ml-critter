import Render from './render';
import Environment from './environment';
import Creature from './creature';

export default class Main {
  constructor(settings) {
    console.log('Main init');

    //Engine
    this._fps = 0;
    this._settings = settings;

    //Classes
    this.env      = new Environment(this);
    this.creature = new Creature(this);
    this.render   = new Render(this);
  } 

  update() {
    
    this.render.update();

  }
}   