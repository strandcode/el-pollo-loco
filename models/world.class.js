class World {

  // NOTE Create all world's objects from related classes
  background = new Background();  // TODO load layers
  clouds = new Clouds();
  pepe = new Pepe();
  statusBar = new StatusBar();
  statusBarHealth = new StatusBarHealth();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  chick = new Chick();
  chicks = [];
  hen = new Hen();
  rooster = new Rooster();
  coin = new Coin();
  bottle = new Bottle();
  throwableObject = new ThrowableObject();



  bottles = this.bottle.bottles;
  coins = this.coin.coins;
  enemies = [this.chick, this.hen, this.rooster];

  constructor() {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.drawWorld();
    this.createChicks(200, 50, 5);
    this.statusBarHealth.show(100);
    this.checkPepesCollisions();
    this.bottle.createBottles(200, 200, 10);
    this.coin.createCoins(200, 200, 10);
    console.log(this.coins);
    console.log(this.throwableObject);
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



  checkPepesCollisions() {
    setInterval(() => {
      // this.level1.enemies.forEach((enemy) => { });

      // this.enemies.forEach((enemy) => {
      //   if (this.pepe.isColliding(enemy) && enemy.isAlive) {
      //     if (!this.pepe.isFlying) {
      //       this.pepe.isAttacked();
      //       this.statusBarHealth.show(this.pepe.energyLevel);
      //     } else {
      //       console.log('Enemy wird platt getreten');
      //       enemy.isAlive = false;
      //       console.log(enemy);
      //       enemy.img = enemy.collection.dead[0];

      //       // enemy.isDead();
      //     }
      //   }
      // });

      this.coins.forEach((coin) => {
        if (this.pepe.isColliding(coin)) {
          this.pepe.isCollectingCoin();
          this.statusBarCoin.show(this.pepe.coinLevel);
          console.log(coin.ID);

          const coinIndex = this.coins.findIndex((b) => b.ID === coin.ID);
          this.coins.splice(coinIndex, 1);
        }
      });

      this.bottles.forEach((bottle) => {
        if (this.pepe.isColliding(bottle)) {
          this.pepe.isCollectingBottle();
          this.statusBarBottle.show(this.pepe.bottleLevel);
          console.log(bottle.ID);

          const bottleIndex = this.bottles.findIndex((b) => b.ID === bottle.ID);
          this.bottles.splice(bottleIndex, 1);
        }
      });


    }, 200);
  }







  // NOTE Diese Funktion generiert immer das aktuelle Bild des jeweiligen World-Objectes in einer fortlaufenden Schleife

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.pepe.worldFocus, 0);

    this.background.drawBackground();
    this.chicks.forEach(chick => chick.draw());
    this.bottle.bottles.forEach(bottle => bottle.draw());
    this.coin.coins.forEach(coin => coin.draw());
    this.hen.draw();
    this.rooster.draw();
    this.pepe.draw();
    this.throwableObject.draw();
    this.clouds.draw();
    this.ctx.translate(-this.pepe.worldFocus, 0);

    this.statusBarHealth.draw();
    this.statusBarBottle.draw();
    this.statusBarCoin.draw();

    let self = this;
    requestAnimationFrame(function () {
      // NOTE drawWorld() wird immer wieder aufgerufen bis zu 60fps (abhängig von Grafikkarte und der Bildschirmfrequenz)
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