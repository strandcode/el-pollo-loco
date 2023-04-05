class Chick extends GeneralObject {
  originWidth = 236;
  originHeight = 210;
  scaleFactor = 0.18;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 250;
  canPosY = 380;

  ID;
  chicks = [];

  walkleftInterval;

  constructor() {
    super();
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsDead', 'dead');
    this.img = this.collection.walk[0];
    this.walkLeft();
  }

  createChicks(x, quantity) {
    for (let i = 0; i < quantity; i++) {
      let newChick = new Chick();
      newChick.canPosX = 0;
      newChick.ID = 'Chick-' + i;
      newChick.canPosX += x + 200 + (Math.random() * 2500);
      allChicksInTheWorld.push(newChick);
    }
  }

  walkLeft() {
    this.currentImage = 0;
    this.walkleftInterval = setInterval(() => {
      if (this.currentImage >= this.collection.walk.length) {
        this.currentImage = 0;
      }
      this.img = this.collection.walk[this.currentImage];
      this.currentImage++;
      if (this.canPosX < 0) { this.canPosX = 5000 }
      this.canPosX = this.canPosX - 5;
    }, 200);
  }

  stopWalkLeft() {
    clearInterval(this.walkleftInterval);
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