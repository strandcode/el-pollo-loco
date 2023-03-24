class Coin extends GeneralObject {
  imageSrcPath = 'img/8_coin/coin_1.png';
  originWidth = 300;
  originHeight = 301;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 30;
  canPosY = 150;

  constructor() {
    super().loadImage(this.imageSrcPath);
  }
}