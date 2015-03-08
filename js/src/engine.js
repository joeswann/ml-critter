import PhysicsJS from "physicsjs";

import Main from "./main"

export default class Engine {

  constructor(opts) { 
    this.main = new Main(opts._settings);

    PhysicsJS((world) => {
      this.main.world = world;
      this.main.start();
      PhysicsJS.util.ticker.on(( time, dt ) => {
        this.tick(time,dt);
      });
    });
  }

  tick(time,dt) {
    this.main.tick(time,dt);
  }

};