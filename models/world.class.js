class World {

  // NOTE Create world's objects
  background = new Background();
  clouds = new Cloud();
  pepe_1 = new Pepe();
  pepe_2 = new Pepe();
  chick = new Chick();
  chicks = [];
  hen = new Hen();
  rooster = new Rooster();
  coin = new Coin();
  bottle = new Bottle();
  canvas;
  ctx;

  constructor() {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.createChicks(250, 50, 5);
    this.clouds.move();
    console.log(this.pepe_2);
  }

  createChicks(startX, spreadX, quantity) {
    let chicks = [];
    let startSpreadX = 0;
    for (let i = 0; i < quantity; i++) {
      let newChick = new Chick();
      newChick.canPosX = 0;
      newChick.canPosX += startX + startSpreadX;
      startSpreadX += spreadX;
      chicks.push(newChick);
    }
    this.chicks = chicks;
  }





  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.drawBackground();
    this.clouds.drawCloud();
    this.chicks.forEach(chick => chick.drawChick());
    this.hen.drawHen();
    this.rooster.drawRooster();
    this.pepe_1.drawPepe();

    this.coin.drawCoin(50, 50);
    this.bottle.drawBottle(120, 350);

    this.coin.drawCoinQuartet(100, 100);

    let self = this;
    requestAnimationFrame(function () {
      // NOTE Draw wird immer wieder aufgerufen bis zu 60fps (abhängig von Grafikkarte)
      self.drawWorld();
    });
  }


  // TODO Funktionen zusammenfassen
  // drawCharacterToDisplay(gameCharacter) {
  //   this.ctx.drawImage(this.gameCharacter.img, this.gameCharacter.canPosX, this.gameCharacter.canPosY, this.gameCharacter.scaledWidth, this.gameCharacter.scaledHeight);
  // }



  // LINK https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  // drawCharacter() {
  //   this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
  // }





  // drawEnemies() {
  //   this.enemies.forEach(enemy => {
  //     // this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
  //     this.addToGameDisplay(enemy);
  //   });
  // }
  // addObjectsToGameDisplay(this.enemies);

  // addObjectsToGameDisplay(objects) {
  //   objects.forEach(o => {
  //     this.addToGameDisplay(o);
  //   })
  // }

  // addToGameDisplay(movableObject) {
  //   this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
  // }

  // // drawCloud() {
  // //   this.ctx.drawImage(this.clouds.img, this.clouds.x, this.clouds.y, this.clouds.width, this.clouds.height);
  // // }

  // drawConsole() {
  //   console.log('Hallo draw');
  // }


}