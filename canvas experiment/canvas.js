var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c = canvas.getContext('2d');

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
