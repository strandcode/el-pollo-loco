class StatusBar extends GeneralObject {
  originWidth = 595;
  originHeight = 158;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 20;
  canPosY = 20;

  constructor() {
    super();
    this.loadCollection('imgPathsStatusBarCoinGreen', 'barCoinGreen');
    this.loadCollection('imgPathsStatusBarHealthGreen', 'barHealthGreen');
    this.loadCollection('imgPathsStatusBarBottleGreen', 'barBottleGreen');
  }

  show(percent) {
    if (percent > 80) {
      this.img = this.collection[this.srcPath][5];
    }
    if (percent >= 60 && percent < 80) {
      this.img = this.collection[this.srcPath][4];
    }
    if (percent >= 40 && percent < 60) {
      this.img = this.collection[this.srcPath][3];
    }
    if (percent >= 20 && percent < 40) {
      this.img = this.collection[this.srcPath][2];
    }
    if (percent > 0 && percent < 20) {
      this.img = this.collection[this.srcPath][1];
    }
    if (percent <= 0) {
      this.img = this.collection[this.srcPath][0];
    }
  }


  imgPathsStatusBarCoinGreen = [
    'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
  ];
  imgPathsStatusBarHealthGreen = [
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
  ];
  imgPathsStatusBarBottleGreen = [
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
    'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
  ];
}