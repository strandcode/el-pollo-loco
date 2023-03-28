class Chick extends GeneralObject {
  originWidth = 236;
  originHeight = 210;
  scaleFactor = 0.18;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 250;
  canPosY = 380;

  constructor() {
    super();
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsDead', 'dead');
    this.img = this.collection.walk[0];
  }

  walkLeft() {
    this.currentImage = 0;
    setInterval(() => {
      if (this.currentImage >= this.collection.walk.length) {
        this.currentImage = 0;
      }
      this.img = this.collection.walk[this.currentImage];
      this.currentImage++;
      if (this.canPosX < 0) { this.canPosX = 720 }
      this.canPosX = this.canPosX - 5;
    }, 200);
  }

  createChicks(startX, spreadX, quantity) {
    this.chicks = [];
    let startSpreadX = 0;
    for (let i = 0; i < quantity; i++) {
      let newChick = new Chick();
      newChick.canPosX = 0;
      newChick.canPosX += startX + startSpreadX;
      startSpreadX += spreadX;
      this.chicks.push(newChick);
    }
  }




  imgPathsWalk = [
    'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];

  imgPathsDead = [
    'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
  ];

}