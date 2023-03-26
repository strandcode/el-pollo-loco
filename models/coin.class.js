class Coin extends GeneralObject {
  originWidth = 300;
  originHeight = 301;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 30;
  canPosY = 150;

  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.img = this.collection.complete[0];
  }

  drawCoinQuartet(x, y) {
    let startX = x;
    let startY = y;
    let space = 25;
    this.draw(startX, startY);
    this.draw((startX + 1 * space), (startY - 1 * space));
    this.draw((startX + 1 * space), (startY + 1 * space));
    this.draw((startX + 2 * space), (startY - 0 * space));
  }

  imgPathsComplete = [
    'img/8_coin/coin_1.png',
    'img/8_coin/coin_2.png'
  ];
}