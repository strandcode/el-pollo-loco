class Bottle extends GeneralObject {
  imageSrcPath = 'img/6_salsa_bottle/salsa_bottle.png';
  originWidth = 400;
  originHeight = 400;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 30;
  canPosY = 150;

  constructor() {
    super().loadImage(this.imageSrcPath);
  }

  drawBottle(x, y) {
    this.canPosX = x;
    this.canPosY = y;
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }

}