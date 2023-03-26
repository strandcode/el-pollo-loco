class Hen extends GeneralObject {
  originWidth = 248;
  originHeight = 243;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 330;
  canPosY = 375;

  constructor() {
    super();
    this.loadCollection('imgPathsWalk', 'walk');
    this.img = this.collection.walk[0];
  }

  drawHen(x, y) {
    if (x && y) {
      this.canPosX = x;
      this.canPosY = y;
    }
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }

  imgPathsWalk = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
  ];
}