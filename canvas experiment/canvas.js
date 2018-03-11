var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c = canvas.getContext('2d');

/*// Rectangle
c.fillStyle = "cyan";
c.fillRect(100, 100, 50, 50);


// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 800);
c.lineTo(700, 200);

c.stroke();

// Arc or Circle
c.beginPath();
c.arc(500, 500, 60, 0, Math.PI * 2, false);
c.strokeStyle = "green";
c.stroke();*/

for (var i = 0; i < 500; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var rad = Math.floor(Math.random() * 300);
  c.beginPath();
  c.arc(x, y, rad, 0, Math.PI * 2, false);
  c.strokeStyle = "rgba("+r+","+g+","+b+",0)";
  c.fill();
  c.fillStyle = "rgba("+r+","+g+","+b+",255)";
  c.stroke();
}
