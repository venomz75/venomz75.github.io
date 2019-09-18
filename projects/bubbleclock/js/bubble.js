//Created: 11/03/18 by Adam Gibbs

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c = canvas.getContext('2d');

//mouse position
var mouse = {
  x: undefined,
  y: undefined
}

//maximum radius of circles
var maxRadius = 40;

//colour scheme
var colourArray = [
  '#2C3E50',
  '#E74C3C',
  '#ECF0F1',
  '#3498DB',
  '#2980B9',
]

//mouse movement listener, logs x and y coordinates
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
})

//fits the inner screen perfectly and redraws the circles when resized to fill screen
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

//OOP function for circles so they can be called easily with a for loop
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.colour = colourArray[Math.floor(Math.random() * colourArray.length)];

  //draws circle
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.colour;
    c.fill();
  }

  //wall collision detection, inverts velocities on collision
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //interactivity with mouse
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 ) {
      if (this.radius < maxRadius)
      this.radius += 1;
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }
    this.draw();
  }
}

//circle drawing function
var circleArray = [];

function init(){
  circleArray = []; //clears circles when resizing window before redrawing

  for (var i = 0; i < 2000; i++) {
    var radius = (Math.random() * 3 + 1);
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

  //makes every circle in the array have its own random velocity and size
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();
