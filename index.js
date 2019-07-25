var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
// mat.random chooses [0,1) ) = not inclusive
// this chooses a random coordinate
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;
console.log(`targetx: ${targetX}\ntargety: ${targetY}`);

function distance(targetx, targety, mousex, mousey){
  var a = targetx - mousex;
  var b = targety - mousey;
  return Math.floor(Math.sqrt(a*a + b*b));

};

function loc(event){
  console.log(`mousex: ${event.clientX}\nmousey: ${event.clientY}`);
  var dist = distance(targetX, targetY, event.clientX, event.clientY);
  console.log(dist);
  box.style.backgroundColor = `rgb(${255 - dist},0,0)`;
};

box.addEventListener("mousemove",loc);
