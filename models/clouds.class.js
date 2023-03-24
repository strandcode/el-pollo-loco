class Cloud extends GeneralObject {
  imageSrcPath = 'img/5_background/layers/4_clouds/full-clouds-reverse.png';
  originWidth = 3840;
  originHeight = 1080;
  scaleFactor = 0.4444;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = Math.floor(this.originHeight * this.scaleFactor);
  canPosX = 10;
  canPosY = -25;

  constructor() {
    super().loadImage(this.imageSrcPath);
  }

  drawCloud() {
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }

  move() {
    let movingClouds = setInterval(() => {
      this.x = this.x - 1;
      if (this.x <= -1400) {
        this.x = 600;
        clearInterval(movingClouds);
        this.move();
      }
    }, 50);
  }
}


// 