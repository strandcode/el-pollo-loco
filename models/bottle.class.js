class Bottle extends GeneralObject {
  originWidth = 400;
  originHeight = 400;
  scaleFactor = 0.18;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 230;
  canPosY = 350;

  offsetX = 25;
  offsetY = 0;
  offsetW = -30;
  offsetH = 0;

  ID;
  bottles = [];

  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.loadCollection('imgPathsOnGround', 'onGround');
    this.img = this.collection.onGround[0];
  }

  createBottles(startX, spreadX, quantity) {
    let startSpreadX = 0;
    for (let i = 0; i < quantity; i++) {
      let newBottle = new Bottle();
      newBottle.canPosX = 0;
      newBottle.ID = 'bottle-' + i;
      newBottle.img = this.collection.onGround[1];
      newBottle.canPosX += startX + startSpreadX;
      startSpreadX += spreadX;
      this.bottles.push(newBottle);
    }
  }




  imgPathsComplete = [
    'img/6_salsa_bottle/salsa_bottle.png'
  ];

  imgPathsOnGround = [
    'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
  ];



}