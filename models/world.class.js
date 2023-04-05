class World {

  // NOTE Create all world's objects from related classes
  background = new Background();
  clouds = new Clouds();
  pepe = new Pepe();
  statusBar = new StatusBar();
  statusBarHealth = new StatusBarHealth();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  statusBarRooster = new StatusBarHealth();
  roosterIcon = new RoosterIcon();
  chick = new Chick();
  hen = new Hen();
  rooster = new Rooster();
  coin = new Coin();
  bottle = new Bottle();
  throwableObject = new ThrowableObject();

  // Arrays aus dem Level_1 
  bottles = allBottlesInTheWorld;
  coins = allCoinsInTheWorld;
  chicks = allChicksInTheWorld;
  hens = allHensInTheWorld;

  projectiles = [];

  // NOTE Intervals of world class

  interval__checkEnemyCollisions;

  constructor() {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.drawWorld();

    this.checkPepesCollisions();
    this.checkEnemyCollisions();
    this.setStatusBars();
    this.activateEnemies();
  }

  setStatusBars() {
    this.statusBarHealth.show(100);
    this.statusBarRooster.canPosX = this.canvas.width - this.statusBarRooster.scaledWidth - 20;
    this.statusBarRooster.canPosY = 20;
    this.statusBarRooster.show(100);
  }


  activateEnemies() {
    this.rooster.isAlerted();
  }


  clearAllIntervals() {
    clearInterval(this.interval__checkEnemyCollisions);
  }


  checkEnemyCollisions() {
    let isRoosterDamaged = false;
    this.checkEnemyCollisions = setInterval(() => {
      this.chicks.forEach((chick) => {
        if (chick.isColliding(this.throwableObject) && chick.isAlive) {
          console.log(chick.ID + ' wurde getroffen');
          chick.isAlive = false;
          chick.stopWalkLeft();
          chick.img = chick.collection.dead[0];
        }
      });

      this.hens.forEach((hen) => {
        if (hen.isColliding(this.throwableObject) && hen.isAlive) {
          console.log(hen.ID + ' wurde getroffen');
          hen.isAlive = false;
          hen.stopWalkLeft();
          hen.img = hen.collection.dead[0];
        }
      });

      if (this.rooster.isColliding(this.throwableObject) && this.rooster.isAlive && !isRoosterDamaged) {
        this.rooster.clearAllIntervals();
        this.rooster.animateGetHurt();
        isRoosterDamaged = true;
        this.rooster.energyLevel -= 20;
        console.log('Rooster is attacked! Energy: ' + this.rooster.energyLevel);
        this.statusBarRooster.show(this.rooster.energyLevel);
        setTimeout(() => {
          isRoosterDamaged = false;
        }, 1000);
        if (this.rooster.energyLevel <= 0) {
          this.rooster.clearAllIntervals();
          this.clearAllIntervals();
          this.rooster.energyLevel = 0;
          this.rooster.animateDying();
        }
      }

    }, 200);
  }


  checkPepesCollisions() {
    setInterval(() => {
      // this.level1.enemies.forEach((enemy) => { });

      this.chicks.forEach((chick) => {
        if (this.pepe.isColliding(chick) && chick.isAlive) {
          if (!this.pepe.isFlying) {
            this.pepe.isAttacked();
            this.pepe.energyLevel -= 5;
            this.statusBarHealth.show(this.pepe.energyLevel);
          } else {
            console.log(chick.ID + ' ist platt');
            chick.isAlive = false;
            chick.stopWalkLeft();
            chick.img = chick.collection.dead[0];
          }
        }
      });

      this.hens.forEach((hen) => {
        if (this.pepe.isColliding(hen) && hen.isAlive) {
          if (!this.pepe.isFlying) {
            this.pepe.isAttacked();
            this.pepe.energyLevel -= 10;
            this.statusBarHealth.show(this.pepe.energyLevel);
          } else {
            console.log(hen.ID + ' ist platt');
            hen.isAlive = false;
            hen.stopWalkLeft();
            hen.img = hen.collection.dead[0];
          }
        }
      });

      if (this.pepe.isColliding(this.rooster) && this.rooster.isAlive) {
        this.pepe.isAttacked();
        this.pepe.energyLevel -= 25;
        this.statusBarHealth.show(this.pepe.energyLevel);
      }


      this.coins.forEach((coin) => {
        if (this.pepe.isColliding(coin)) {
          this.pepe.isCollectingCoin();
          this.statusBarCoin.show(this.pepe.coinLevel);

          const coinIndex = this.coins.findIndex((b) => b.ID === coin.ID);
          this.coins.splice(coinIndex, 1);
        }
      });

      this.bottles.forEach((bottle) => {
        if (this.pepe.isColliding(bottle)) {
          this.pepe.isCollectingBottle();
          console.log(bottle.ID);
          this.statusBarBottle.show(this.pepe.bottleLevel);

          const bottleIndex = this.bottles.findIndex((b) => b.ID === bottle.ID);
          this.bottles.splice(bottleIndex, 1);
          this.projectiles.push(bottle);
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
    this.bottles.forEach(bottle => bottle.draw());
    this.hens.forEach(hen => hen.draw());
    this.coins.forEach(coin => coin.draw());
    this.rooster.draw();
    this.pepe.draw();
    this.throwableObject.draw();
    this.clouds.draw();
    this.ctx.translate(-this.pepe.worldFocus, 0);

    this.statusBarHealth.draw();
    this.statusBarBottle.draw();
    this.statusBarCoin.draw();
    this.statusBarRooster.draw();
    this.roosterIcon.draw();

    let self = this;
    requestAnimationFrame(function () {
      // NOTE drawWorld() wird immer wieder aufgerufen bis zu 60fps (abhängig von Grafikkarte und der Bildschirmfrequenz)
      self.drawWorld();
    });
  }

}