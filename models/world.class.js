class World {
  character = new Character();
  enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken()
  ];
  clouds = new Cloud();
  background = new Background();
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.enemies[1].x = 400 + Math.random() * 100;
    this.enemies[2].x = 500 + Math.random() * 100;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.drawCloud();
    this.drawEnemies();
    this.drawCharacter();
    let self = this;
    requestAnimationFrame(function () { // Draw wird immer wieder aufgerufen bis zu 60fps (abhängig von Grafikkarte)
      self.draw();
    });
  }

  drawCharacter() {
    this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
  }

  drawEnemies() {
    setTimeout(() => { this.enemies[1].y = 200; }, 1000);  // NOTE Nur zum Test
    this.enemies.forEach(enemy => {
      this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
    });
  }

  drawCloud() {
    this.ctx.drawImage(this.clouds.img, this.clouds.x, this.clouds.y, this.clouds.width, this.clouds.height);
  }

  drawBackground() {
    this.ctx.drawImage(this.background.img, this.background.x, this.background.y, this.background.width, this.background.height);
  }
}