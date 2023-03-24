class World {
  // character = new Character();
  // enemies = [
  //   new Chicken(),
  //   new Chicken(),
  //   new Chicken()
  // ];
  // clouds = new Cloud();
  // From upper left corner
  // groundLine;
  // skyLine;
  // leftLine;
  // rightLine;
  background = new Background();
  pepe = new Pepe();
  chick = new Chick();
  hen = new Hen();
  rooster = new Rooster();
  coin = new Coin();
  canvas;
  ctx;


  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    console.log(this.pepe);
    console.log(this.pepe.img.src);
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.drawPepe();
    this.drawChick();
    this.drawHen();
    this.drawRooster();
    // this.drawCoinTrio(50, 130);
    this.drawCoinTrio(100, 130);
    let self = this;
    requestAnimationFrame(function () { // Draw wird immer wieder aufgerufen bis zu 60fps (abhängig von Grafikkarte)
      self.draw();
    });
  }


  // TODO Funktionen zusammenfassen
  drawCharacterToDisplay(gameCharacter) {
    this.ctx.drawImage(this.gameCharacter.img, this.gameCharacter.canPosX, this.gameCharacter.canPosY, this.gameCharacter.scaledWidth, this.gameCharacter.scaledHeight);
  }

  drawCoin(x, y) {
    this.coin.canPosX = x;
    this.coin.canPosY = y;
    this.ctx.drawImage(this.coin.img, this.coin.canPosX, this.coin.canPosY, this.coin.scaledWidth, this.coin.scaledHeight);
  }

  drawCoinTrio(x, y) {
    let startX = x;
    let startY = y;
    let space = 30;
    this.drawCoin(startX, startY);
    this.drawCoin((startX + space), (startY - space));
    this.drawCoin((startX + 2 * space), (startY - 2 * space));
  }


  drawPepe() {
    this.ctx.drawImage(this.pepe.img, this.pepe.canPosX, this.pepe.canPosY, this.pepe.scaledWidth, this.pepe.scaledHeight);
  }


  drawBackground() {
    this.ctx.drawImage(this.background.img, this.background.canPosX, this.background.canPosY, this.background.scaledWidth, this.background.scaledHeight);
  }



  drawChick() {
    this.ctx.drawImage(this.chick.img, this.chick.canPosX, this.chick.canPosY, this.chick.scaledWidth, this.chick.scaledHeight);
  }
  drawHen() {
    this.ctx.drawImage(this.hen.img, this.hen.canPosX, this.hen.canPosY, this.hen.scaledWidth, this.hen.scaledHeight);
  }
  drawRooster() {
    this.ctx.drawImage(this.rooster.img, this.rooster.canPosX, this.rooster.canPosY, this.rooster.scaledWidth, this.rooster.scaledHeight);
  }

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