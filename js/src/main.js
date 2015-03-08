import Render from './render';
import Environment from './environment';
import Creature from './creature';

export default class Main {
  constructor(settings) {
    console.log('Main init');

    //Engine
    this._settings = settings;
  } 

  start() {
    //Classes
    this.environment = new Environment(this);
    this.creature    = new Creature(this);
    this.render      = new Render(this);
  }

  tick(time,dt) {
    this.environment.tick(time,dt);
    this.render.tick();
  }
}   