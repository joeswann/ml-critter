import PhysicsJS from "physicsjs";

export default class Environment {
  constructor(main) {
    this.main = main;
    this.$environmnet  = $('#environment');

    this.width  = window.innerWidth / 2;
    this.height = window.innerHeight;

    //Putting render stuff for env in here because
    //its coupled with the physics engine

    var world      = main.world;
    var viewWidth  = this.width;
    var viewHeight = this.height;

    var renderer = PhysicsJS.renderer('canvas', {
      el: 'environment',
      width: viewWidth,
      height: viewHeight,
      autoResize: false,
      meta: false, // don't display meta data
      styles: {
        // set colors for the circle bodies
        'circle' : {
          strokeStyle: '#351024',
          lineWidth: 1,
          fillStyle: '#d33682',
          angleIndicator: '#351024'
        }
      }
    }); 

    // add the renderer
    world.add( renderer );

    // render on each step
    world.on('step', function(){
      world.render(); 
    });

    // bounds of the window
    var viewportBounds = PhysicsJS.aabb(0, 0, viewWidth, viewHeight);

    // constrain objects to these bounds
    world.add(PhysicsJS.behavior('edge-collision-detection', {
        aabb: viewportBounds,
        restitution: 0.99,
        cof: 0.99
    }));

    // add a circle
    world.add(
        PhysicsJS.body('circle', {
          x: viewWidth / 2, // x-coordinate
          y: viewHeight / 2, // y-coordinate
          vx: 0.0, // velocity in x-direction
          vy: 0.00, // velocity in y-direction
          radius: 20
        })
    );

    // ensure objects bounce when edge collision is detected
    world.add( PhysicsJS.behavior('body-impulse-response') );

    // start the ticker
    PhysicsJS.util.ticker.start();

  }

  tick(time,dt) {
    //Refresh background
    //this.clear(this.env_context, '#111');
    //Draw creature
    //Draw avoid
    //Draw find
    this.main.world.step( time );
  }
}