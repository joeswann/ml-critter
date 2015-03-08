
export default class Render {
  constructor(main) {
    this.main   = main;

    this.$env   = $('#environment');
    this.$brain = $('#brain');
    this.$info  = $('#info');

    this.width  = window.innerWidth / 2;
    this.height = window.innerHeight;

    this.$brain.attr('width',  this.width).attr('height', this.height);
    this.$env.attr('width',  this.width).attr('height', this.height);

    this.env_context   = this.$env[0].getContext("2d");
    this.brain_context = this.$brain[0].getContext("2d");
  }

  update() {
    this.environment();
    this.brain();
    this.info();
  }

  info() { 
    var string = "Fps: " + this.main._fps;
    this.$info.text(string);
  }

  environment() {
    //Refresh background
    this.clear(this.env_context, '#111');
    //Draw creature
    //Draw avoid
    //Draw find
  }

  brain() {
    var brain = this.main.creature.brain;
    //Refresh background 
    this.clear(this.brain_context, '#aaf');

    //Draw inputs
    //Draw outputs
    //Draw neurons
    this.neurons(brain.neurons);
    //Draw connections 
  }

  neurons(neurons) {
    var i = neurons.length;
    while(i--) {
      var neuron = neurons[i];
      this.drawCircle(this.brain_context, {
        c : '#666',
        x : neuron.position.x * this.width,
        y : neuron.position.y * this.height,
        r : neuron.radius
      });
    }
  }

  clear(c, color) {
    c.fillStyle = color;
    c.fillRect(0, 0, this.width, this.height);
  }

  drawCircle(c,opts) {
    c.fillStyle = opts.c; 
    c.beginPath();
    c.arc(opts.x, opts.y, opts.r, 0, Math.PI * 2, false);
    c.closePath();
    c.fill();
  }

  drawLines(c,lines) {
    c.strokeStyle = '#f44';
    for(let line of lines) {
      c.beginPath(); 
      c.moveTo(line.a.x, line.a.y);
      c.lineTo(line.b.x, line.b.y);
      c.closePath();
      c.stroke();
    }
  }
}