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
    this.loadCollection('imgPathsDead', 'dead');
    if (this.isAlive) {
      this.img = this.collection.walk[0];
    } else {
      this.img = this.collection.dead[0];
    }
  }

  walkLeft() {
    this.currentImage = 0;
    if (this.isAlive) {
      setInterval(() => {
        if (this.currentImage >= this.collection.walk.length) {
          this.currentImage = 0;
        }
        this.img = this.collection.walk[this.currentImage];
        this.currentImage++;
        if (this.canPosX < 0) { this.canPosX = 720 }
        this.canPosX = this.canPosX - 8;
      }, 200);
    }
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