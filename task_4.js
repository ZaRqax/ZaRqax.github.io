let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
var i = -20;
var l = -20;
var x = -20;
var y = 20;

let w = canvas.width, h = canvas.height;

function draw_timeout() {
      context.beginPath();
      context.clearRect(0, 0, 600, 600);
      context.fillStyle="red";
      context.stroke();
      i = i + 0.1;
      context.fillRect(300+i*15, -100*Math.sin(i)+ h/2, 10, 10);
      if (i < 21) 
      setTimeout(draw_timeout,0);
}

function draw_animationframe() {
      context.beginPath();
      context.clearRect(0, 0, 600, 600);
      context.fillStyle="red";
      context.stroke();
      l = l + 0.1;
      context.fillRect(300+l*15, -100*Math.sin(l)+ h/2, 10, 10);
      if (l < 21)
      requestAnimationFrame(draw_animationframe,0);
}

function draw_left() {
      context.beginPath();
      context.clearRect(0, 0, 600, 600);
      context.fillStyle="red";
      context.stroke();
      x = x + 0.1;
      context.fillRect(300+x*15, -100*Math.sin(x)+ h/2, 10, 10);
      if (x < 21)
      requestAnimationFrame(draw_left,0);
}

function draw_right() {
      context.beginPath();
      context.clearRect(0, 0, 600, 600);
      context.fillStyle="red";
      context.stroke();
      y = y - 0.1;
      context.fillRect(300+y*15, -100*Math.sin(y)+ h/2, 10, 10);
      if (y > -21)
      requestAnimationFrame(draw_right,0);
}