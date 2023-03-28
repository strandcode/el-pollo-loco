class Bottle extends GeneralObject {
  originWidth = 400;
  originHeight = 400;
  scaleFactor = 0.18;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 30;
  canPosY = 350;

  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.loadCollection('imgPathsOnGround', 'onGround');
    this.img = this.collection.onGround[0];
  }

  imgPathsComplete = [
    'img/6_salsa_bottle/salsa_bottle.png'
  ];

  imgPathsOnGround = [
    'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
  ];



}