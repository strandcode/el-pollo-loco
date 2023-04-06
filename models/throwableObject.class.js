class ThrowableObject extends GeneralObject {

  originWidth = 400;
  originHeight = 400;
  scaleFactor = 0.18;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = -100;
  canPosY = 100;

  offsetX = 0;
  offsetY = 0;
  offsetW = 0;
  offsetH = 0;

  bottleFlight = false;
  thrownBottleCount = 0;
  animateBottleRotationInterval;

  constructor() {
    super();
    this.loadCollection('imgPathsRotation', 'rotation');
    this.loadCollection('imgPathsSplash', 'splash');
    this.img = this.collection.rotation[1];
  }

  throw(x, y) {
    console.log(this.bottleFlight);
    if (!this.bottleFlight) {
      this.bottleFlight = true;
      this.thrownBottleCount++;
      this.animateBottleRotation();
      this.canPosX = x;
      this.canPosY = y;
      this.speedY = 12;
      this.bottleFlight = setInterval(() => {
        this.canPosX += 10;
        this.canPosY -= this.speedY;
        this.speedY -= this.accelaration;
        if (this.canPosY >= 390) {
          clearInterval(this.bottleFlight);
          clearInterval(this.animateBottleRotationInterval);
          this.img = this.collection.splash[0];
          setTimeout(() => {
            this.canPosY = 2000;
            this.bottleFlight = false;
          }, 500);
        }
      }, 50);
    }
  }


  animateBottleRotation() {
    this.currentImage = 0;
    this.animateBottleRotationInterval = setInterval(() => {
      if (this.currentImage >= this.collection.rotation.length) {
        this.currentImage = 0;
      }
      this.img = this.collection.rotation[this.currentImage];
      this.currentImage++;
    }, 100);
  }






  imgPathsRotation = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ];

  imgPathsSplash = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
  ];



}