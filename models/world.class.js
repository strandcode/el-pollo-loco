class World {

  // NOTE Create all world's objects from related classes
  background = new Background();  // TODO load layers
  clouds = new Clouds();
  pepe = new Pepe();
  chick = new Chick();
  chicks = [];
  hen = new Hen();
  rooster = new Rooster();
  coin = new Coin();
  bottle = new Bottle();
  // TODO statusbar

  constructor() {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.drawWorld();
    this.createChicks(200, 50, 5);
    setInterval(() => {
      // console.log(this.pepe.canPosY);
    }, 1000);
  }




  // NOTE Diese Funktion generiert immer das aktuelle Bild des jeweiligen World-Objectes in einer fortlaufenden Schleife

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.pepe.worldFocus, 0);
    this.background.drawBackground();
    this.chicks.forEach(chick => chick.draw());
    this.hen.draw();
    this.rooster.draw();
    this.coin.draw();
    this.bottle.draw();
    this.pepe.draw();
    this.clouds.draw();
    this.ctx.translate(-this.pepe.worldFocus, 0);

    let self = this;
    requestAnimationFrame(function () {
      // NOTE drawWorld() wird immer wieder aufgerufen bis zu 60fps (abhängig von Grafikkarte und der Bildschirmfrequenz)
      self.drawWorld();
    });
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