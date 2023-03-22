let canvas;
let ctx;
let world;

function init() {
  // canvas width="720" height="480"
  canvas = document.getElementById('canvas');
  world = new World(canvas);

  console.log(world);
  console.log(world.character);
  console.log(world.enemies);
}


// Additional information
// LINK https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage