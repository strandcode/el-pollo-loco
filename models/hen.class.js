class Hen extends GeneralObject {
  originWidth = 248;
  originHeight = 243;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 330;
  canPosY = 375;

  ID;
  hens = [];

  walkleftInterval;

  constructor() {
    super();
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsDead', 'dead');
    if (this.isAlive) {
      this.img = this.collection.walk[0];
    } else {
      this.img = this.collection.dead[0];
    }
  }

  // TODO Verteilung nach dem Zufallssprinzip
  createHens(startX, spreadX, quantity) {
    let startSpreadX = 0;
    for (let i = 0; i < quantity; i++) {
      let newHen = new Hen();
      newHen.canPosX = 0;
      newHen.ID = 'hen-' + i;
      newHen.canPosX += startX + startSpreadX;
      startSpreadX += spreadX;
      this.hens.push(newHen);
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
      this.canPosX = this.canPosX - 8;
    }, 200);
  }


  stopWalkLeft() {
    clearInterval(this.walkleftInterval);
  }

  imgPathsWalk = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ];
  imgPathsDead = [
    'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
  ];
}