
const canvas = document.getElementById('canvas');
let canvasWidth = window.innerWidth - 10;
if (canvasWidth > 1000) { canvasWidth = 1000; }
const gameDisplay = new GameDisplay(canvas, canvasWidth, 480);
const keyboard = new Keyboard();
const world = new World();



const startGameButton = document.getElementById('startGameButton');
const controlDescription = document.getElementById('controlDescription');
const startScreen = document.getElementById('startScreen');

function startGame() {
  startScreen.classList.add('d-none');
  startGameButton.classList.add('d-none');
  canvas.classList.remove('d-none');
  controlDescription.classList.remove('d-none');
}

const levelSummary = document.getElementById('levelSummary');
const collectedCoins = document.getElementById('collectedCoins');
const thrownBottles = document.getElementById('thrownBottles');
const killedEnemies = document.getElementById('killedEnemies');

function showLevelSummary() {
  levelSummary.classList.remove('d-none');
  collectedCoins.innerHTML = '5';
  thrownBottles.innerHTML = '12';
  killedEnemies.innerHTML = '9';
}

function startNextLevel() {
  window.location.reload();
  levelSummary.classList.add('d-none');
  startScreen.classList.add('d-none');
  startGameButton.classList.add('d-none');
}


// TODO exclude to controlPepe.js


// NOTE Global key status survey
let isArrowRightPressed = false;
let isArrowLeftPressed = false;
let isSpacePressed = false;

let isArrowUpPressed = false;
let isArrowDownPressed = false;
let isKeyDPressed = false;
let isKeySPressed = false;
let isKeyEscapePressed = false;

let walkingIntervalId = null;
let jumpPrevent = false;
let throwPrevent = false;
let areEnemiesActivated = false;



function controlPepe() {
  window.addEventListener('keydown', (event) => {
    if (event.code == "ArrowRight") {
      isArrowRightPressed = true;
      world.pepe.isPepeWalking = true;
      world.activateEnemies();

      if (!world.pepe.isOffGround) {
        world.pepe.animateWalk();
      }
    }
    if (event.code == "ArrowLeft") {
      isArrowLeftPressed = true;
      world.pepe.isImageFlipped = true;
      world.pepe.isPepeWalking = true;

      if (!world.pepe.isOffGround) {
        world.pepe.animateWalk();
      }
    }
    if (event.code == "ArrowUp") {
      isArrowUpPressed = true;
      world.pepe.stopWalk();
      world.pepe.animateJump();
    }
    if (event.code == "KeyD") {
      isKeyDPressed = true;
      if (world.projectiles.length > 0) {
        world.throwableObject.throw((world.pepe.canPosX + world.pepe.scaledWidth + world.pepe.offsetW), world.pepe.canPosY + 100);
        world.projectiles.splice(0, 1);
        world.pepe.bottleLevel -= 5;
        world.statusBarBottle.show(world.pepe.bottleLevel);
      }
    }
    if (event.code == "KeyS") {
      isKeySPressed = true;
      startNextLevel();
    }


  });

  window.addEventListener('keyup', (event) => {
    if (event.code == "ArrowRight") {
      isArrowRightPressed = false;
      world.pepe.isPepeWalking = false;
      world.pepe.stopWalk();

    }
    if (event.code == "ArrowLeft") {
      isArrowLeftPressed = false;
      world.pepe.isImageFlipped = false;
      world.pepe.isPepeWalking = false;
      world.pepe.stopWalk();
    }
    if (event.code == "ArrowUp") {
      isArrowUpPressed = false;
    }
    if (event.code == "KeyD") {
      isKeyDPressed = false;
    }
  });

  // Intervall of 10ms is the keypressed reaction time

  setInterval(() => {
    if (isArrowRightPressed) {
      world.pepe.moveRight();
    }

    if (isArrowLeftPressed) {
      world.pepe.moveLeft();
    }

    if (isArrowUpPressed) {
      world.pepe.jump();
    }

  }, 10);

}
controlPepe();
