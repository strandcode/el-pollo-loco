
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
let isSpacePressed = false;

let isArrowUpPressed = false;
let isArrowDownPressed = false;
let isKeyDPressed = false;
let isKeyEscapePressed = false;

let isPepeJumping = false;
let isPepeFlying = false;


function controlPepe() {
  window.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (event.code == "ArrowRight") {
      isArrowRightPressed = true;
    }
    if (event.code == "ArrowLeft") {
      isArrowLeftPressed = true;
      world.pepe.isImageFlipped = true;
    }
    if (event.code == "Space") {
      isSpacePressed = true;
      isPepeJumping = true;
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
    if (event.code == "Space") {
      isSpacePressed = false;
      isPepeJumping = false;
    }
  });

  // Intervall of 10ms is the keypressed reaction time
  setInterval(() => {
    if (isArrowRightPressed) {
      world.pepe.walkRight();
    }

    if (isArrowLeftPressed) {
      world.pepe.moveLeft();
    }

    if (isSpacePressed && isPepeFlying == false) {
      world.pepe.jump()
    }

  }, 10);

}
controlPepe();
