class StatusBarCoin extends StatusBar {
  canPosX = 20;
  canPosY = 50;

  srcPath = 'barCoinGreen';

  constructor() {
    super();
    this.img = this.collection.barCoinGreen[0];
  }
}