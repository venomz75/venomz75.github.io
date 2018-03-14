// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
};

var colors = [
	'#2C3E50',
  '#E74C3C',
  '#ECF0F1',
  '#3498DB',
  '#2980B9',
];

var gravity = 0.981;
var friction = 0.80;

// Event Listeners
addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", function() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	init();
});

addEventListener("click", function() {
	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if (this.y + this.radius + this.dy > canvas.height) {
			this.dy = (-this.dy * friction);
			this.dx = (this.dx * friction);
		}
		else {
			this.dy += gravity;
			console.log(this.dy);
		}

		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0){
			this.dx = (-this.dx * friction);
		}
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	};
}


// Implementation
var ball;
var ballArray;
function init() {
	ballArray = [];
	for (var i = 0; i < 200; i++) {
		var radius = randomIntFromRange(8, 20);
		var x = randomIntFromRange(radius,canvas.width - radius);
		var y = randomIntFromRange(0,(canvas.height - radius)-100);
		var dx = randomIntFromRange(-2,2);
		var dy = randomIntFromRange(-2,2);
		var color = randomColor(colors);
		ballArray.push(new Ball(x, y, dx, 2, radius, color));
	}
	console.log(ballArray);
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);


	c.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < ballArray.length; i++) {
		ballArray[i].update();
	}
	c.strokeText("CLICK TO RESTART", mouse.x, mouse.y);

}

init();
animate();
