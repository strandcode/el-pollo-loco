class GameDisplay {
  // standard canvas width="720" height="480"
  gameDisplayWidth = 720;
  gameDisplayHeight = 480;
  canvas;
  ctx;

  constructor(canvas, gameDisplayWidth, gameDisplayHeight) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    if (gameDisplayWidth && gameDisplayHeight) {
      this.gameDisplayWidth = gameDisplayWidth;
      this.gameDisplayHeight = gameDisplayHeight;
    }
    canvas.width = this.gameDisplayWidth;
    canvas.height = this.gameDisplayHeight;
  }
}