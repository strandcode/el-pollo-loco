
const canvas = document.getElementById('canvas');
const gameDisplay = new GameDisplay(canvas, 720, 480);
const keyboard = new Keyboard();
const world = new World();


console.log(keyboard);
console.log(world.pepe);

world.pepe.walkRight();
world.clouds.move();

console.log(world.chicks[0]);
world.chick.walkLeft();
world.chicks[0].walkLeft();
world.chicks[1].walkLeft();
world.chicks[2].walkLeft();
world.chicks[3].walkLeft();
setTimeout(() => { world.chicks[4].walkLeft(); }, 2000);
