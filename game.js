function init() {
  const canvas = document.getElementById('canvas');
  new GameDisplay(canvas, 720, 480);
  const world = new World(canvas);
  world.drawWorld();
}






// const GD = GameDisplay.prototype;
// const G = GlobalObject.prototype;
// const P = Pepe.prototype;
// const C = Chick.prototype;
// const H = Hen.prototype;
// const R = Rooster.prototype;
// const Co = Coin.prototype;
// const B = Bottle.prototype;
// const S = Statusbar.prototype;
