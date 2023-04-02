class Coin extends GeneralObject {
  originWidth = 300;
  originHeight = 301;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 230;
  canPosY = 150;

  ID;
  coins = [];


  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.img = this.collection.complete[0];
    this.animateCoin();
  }

  createCoins(startX, spreadX, quantity) {
    let startSpreadX = 0;
    for (let i = 0; i < quantity; i++) {
      let newCoin = new Coin();
      newCoin.canPosX = 0;
      newCoin.ID = 'coin-' + i;
      newCoin.img = this.collection.complete[0];
      newCoin.canPosX += startX + startSpreadX;
      startSpreadX += spreadX;
      this.coins.push(newCoin);
    }
  }



  // TODO Funktion erstellen
  // createCoinQuartet(x, y) {
  //   let startX = x;
  //   let startY = y;
  //   let space = 25;


  //   this.draw(startX, startY);
  //   this.draw((startX + 1 * space), (startY - 1 * space));
  //   this.draw((startX + 1 * space), (startY + 1 * space));
  //   this.draw((startX + 2 * space), (startY - 0 * space));

  //   this.coinQuartet = coinQuartet;
  // }

  animateCoin() {
    setInterval(() => {
      this.currentImage = this.currentImage % this.collection.complete.length;
      this.img = this.collection.complete[this.currentImage];
      this.currentImage++;
    }, 1000);
  }

  imgPathsComplete = [
    'img/8_coin/coin_1.png',
    'img/8_coin/coin_2.png'
  ];
}