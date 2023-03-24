class Chick extends GeneralObject {
  imageSrcPath = 'img/3_enemies_chicken/chicken_small/1_walk/1_w.png';
  originWidth = 236;
  originHeight = 210;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 250;
  canPosY = 380; //  gameDisplayHeight + GroundLine - scaledWidth

  constructor() {
    super().loadImage(this.imageSrcPath);
  }

  drawChick(x, y) {
    if (x && y) {
      this.canPosX = x;
      this.canPosY = y;
    }
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }




}