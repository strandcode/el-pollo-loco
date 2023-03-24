class Cloud extends GeneralObject {
  imageSrcPath = 'img/5_background/layers/4_clouds/full.png';
  originWidth = 3840;
  originHeight = 1080;
  scaleFactor = 0.4444;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = Math.floor(this.originHeight * this.scaleFactor);
  canPosX = 720;
  canPosY = -25;

  constructor() {
    super().loadImage(this.imageSrcPath);
  }

  drawCloud() {
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }


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


// 