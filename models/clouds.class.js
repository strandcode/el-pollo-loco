class Clouds extends GeneralObject {
  originWidth = 3840;
  originHeight = 1080;
  scaleFactor = (this.canvas.height / this.originHeight).toFixed(6);
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = this.canvas.width;
  canPosY = 0;

  constructor() {
    super();
    this.loadCollection('imgPathsClouds', 'clouds');
    this.img = this.collection.clouds[0];
    this.move();
  }


  // TODO Wolken noch auf voller Worldwidth
  move() {
    let movingClouds = setInterval(() => {
      this.canPosX = this.canPosX - 0.5;
      if (this.canPosX <= -3840) {
        this.canPosX = 4980;
        clearInterval(movingClouds);
        this.move();
      }
    }, 45);
  }

  imgPathsClouds = [
    'img/5_background/layers/4_clouds/full.png',
  ];
}