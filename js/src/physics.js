import PhysicsJS from "physicsjs";

export default class Physics {
  constructor(render) {
    console.log('Init physics');

    this.world = false;
    PhysicsJS((world) => {

      var viewWidth  = render.width;
      var viewHeight = render.height;

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
            x: 50, // x-coordinate
            y: 30, // y-coordinate
            vx: 0.2, // velocity in x-direction
            vy: 0.01, // velocity in y-direction
            radius: 20
          })
      );

      // ensure objects bounce when edge collision is detected
      world.add( PhysicsJS.behavior('body-impulse-response') );

      // subscribe to ticker to advance the simulation
      //PhysicsJS.util.ticker.on(function( time, dt ){
          //world.step( time );
      //});

      // start the ticker
      PhysicsJS.util.ticker.start();

      this.world = world
    });
  }

  update() {
    console.log('tick');
    this.world.step( PhysicsJS.util.ticker.now() );
  }
}