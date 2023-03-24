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

  drawCoin(x, y) {
    this.canPosX = x;
    this.canPosY = y;
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }

  drawCoinQuartet(x, y) {
    let startX = x;
    let startY = y;
    let space = 25;
    this.drawCoin(startX, startY);
    this.drawCoin((startX + 1 * space), (startY - 1 * space));
    this.drawCoin((startX + 1 * space), (startY + 1 * space));
    this.drawCoin((startX + 2 * space), (startY - 0 * space));
  }
}