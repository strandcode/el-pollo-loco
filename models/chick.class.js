class Chick extends GeneralObject {
  imageSrcPath = 'img/3_enemies_chicken/chicken_small/1_walk/1_w.png';
  originWidth = 236;
  originHeight = 210;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 250;
  canPosY = 380; //  gameDisplayHeight + GroundLine - scaledWidth

  constructor() {
    super().loadImage(this.imageSrcPath);
    this.loadCollection('imgPathsWalk', 'walk');
    this.walkLeft();
  }

  drawChick(x, y) {
    if (x && y) {
      this.canPosX = x;
      this.canPosY = y;
    }
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
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


  loadCollection(imgPathsName, key) {
    this.collection[key] = [];
    this[imgPathsName].forEach(element => {
      let newImg = new Image();
      newImg.src = element;
      this.collection[key].push(newImg);
    })
  }

  imgPathsWalk = [
    'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];


}