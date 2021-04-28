let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let w = canvas.width, h = canvas.height;
let l = 1;

let img = document.getElementById("img");
let x=100, y=100;

function draw_bezie() {
      context.clearRect(0, 0, 600, 600);
      context.beginPath();
      context.strokeStyle = 'green';
      context.fillStyle = 'green';
      context.moveTo(0, 300);
      context.bezierCurveTo(300, 600, 300, 0, 600, 300);
      context.moveTo(0, 300);
      context.bezierCurveTo(300, 0, 300, 600, 600, 300);
      context.moveTo(300, 0);
      context.bezierCurveTo(600, 300, 0, 300, 300, 600);
      context.moveTo(300, 0);
      context.bezierCurveTo(0, 300, 600, 300, 300, 600);
      context.stroke();
      context.fill();
      context.closePath();
}

function draw_func() {
      context.clearRect(0, 0, 600, 600);
      context.beginPath();
      context.moveTo(0, h / 2);
      context.lineTo(w, h / 2);
      context.moveTo(w / 2, 0);
      context.lineTo(w / 2, h);
      for(var i=-50;i<50;i+=0.01){
            context.fillStyle="red";
            context.fillRect(300+i*15, -30*Math.tan(i)+ h/2, 1, 1);
        }
      context.stroke();
      context.closePath();
}


function draw_triangle() {
      context.beginPath();
      context.strokeStyle = 'red';
      context.moveTo(w/2-l/2,h);
      context.lineTo(w/2-l/2+l,h);
      context.lineTo(w/2-l/2+l/2,h-l);
      context.lineTo(w/2-l/2,h); 
      context.stroke();
      l = l + 10;
      if (l < 602)
      setTimeout(draw_triangle,10);
}

function triangle() {
      context.clearRect(0, 0, 600, 600);
      context.beginPath();
      draw_triangle();
      context.closePath();
}

function image() {
      context.clearRect(0, 0, 600, 600);
      context.drawImage(img, 0, 0, x, y);
      document.getElementById("+").onclick = function() {
            context.clearRect(0, 0, 600, 600);
            x += 10;
            y += 10;
            context.drawImage(img, 0, 0, x, y);
      }
      document.getElementById("-").onclick = function() {
            context.clearRect(0, 0, 600, 600);
            x -= 10;
            y -= 10;
            context.drawImage(img, 0, 0, x, y)
      }
}