
const canvas = document.getElementById('canvas');
const gameDisplay = new GameDisplay(canvas, 720, 480);
const keyboard = new Keyboard();
const world = new World();



world.chicks.forEach(chick => chick.walkLeft());
setTimeout(() => { world.hen.walkLeft(); }, 4500);
setTimeout(() => { world.rooster.walkLeft(); }, 6000);


function startGame() {
  const startScreen = document.querySelector('.start-screen');
  startScreen.classList.add('d-none');
}

// TODO exclude to controlPepe.js


// NOTE Global key status survey
let isArrowRightPressed = false;
let isArrowLeftPressed = false;
let isArrowUpPressed = false;
let isArrowDownPressed = false;
let isSpacePressed = false;
let isKeyDPressed = false;
let isKeyEscapePressed = false;


function controlPepe() {
  window.addEventListener('keydown', (event) => {
    if (event.code == "ArrowRight") {
      isArrowRightPressed = true;
    }
    if (event.code == "ArrowLeft") {
      isArrowLeftPressed = true;
      world.pepe.isImageFlipped = true;
    }
  });
  window.addEventListener('keyup', (event) => {
    if (event.code == "ArrowRight") {
      isArrowRightPressed = false;
    }
    if (event.code == "ArrowLeft") {
      isArrowLeftPressed = false;
      world.pepe.isImageFlipped = false;
    }
  });

  // Call pepe's move functions continuously (every 60ms) while the right key is pressed
  setInterval(() => {
    if (isArrowRightPressed) {
      world.pepe.walkRight();

    }
    if (isArrowLeftPressed) {
      world.pepe.walkLeft();
    }
  }, 60);
}
controlPepe();
