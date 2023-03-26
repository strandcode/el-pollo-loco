class Clouds extends GeneralObject {
  originWidth = 3840;
  originHeight = 1080;
  scaleFactor = 0.4444;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = Math.floor(this.originHeight * this.scaleFactor);
  canPosX = 720;
  canPosY = -25;

  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.img = this.collection.complete[0];
  }

  imgPathsComplete = [
    'img/5_background/layers/4_clouds/full.png'
  ];


  // TODO Wolken noch richtig animieren
  move() {
    let movingClouds = setInterval(() => {
      this.canPosX = this.canPosX - 0.5;
      if (this.canPosX <= -3000) {
        this.canPosX = 600;
        clearInterval(movingClouds);
        this.move();
      }
    }, 45);
  }
}