class Bottle extends GeneralObject {
  originWidth = 400;
  originHeight = 400;
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

  imgPathsComplete = [
    'img/6_salsa_bottle/salsa_bottle.png'
  ];


}