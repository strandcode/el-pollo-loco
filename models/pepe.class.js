class Pepe extends GeneralObject {
  imageSrcPath = 'img/2_character_pepe/1_idle/idle/I-1.png';
  originWidth = 610;
  originHeight = 1200;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 30;
  canPosY = 150;

  constructor() {
    super().loadImage(this.imageSrcPath);
    this.loadCollection('imgPathsIdle', 'idle');
    this.loadCollection('imgPathsLongIdle', 'longIdle');
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsJump', 'jump');
    this.loadCollection('imgPathsHurt', 'hurt');
    this.loadCollection('imgPathsDead', 'dead');
    // this.animate('idle');
    // this.animate('longIdle');
    // this.animate('jump');
    // this.animate('hurt');
    // this.animate('dead');
    // this.animate('walk');
    this.walkRight();
  }

  draw(x, y) {
    if (x && y) {
      this.canPosX = x;
      this.canPosY = y;
    }
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }

  animate(movement) {
    this.currentImage = 0;
    setInterval(() => {
      // REVIEW let i = this.currentImage % this.collection[movement].length;
      // this.img = this.collection[movement][i];
      if (this.currentImage >= this.collection[movement].length) {
        this.currentImage = 0;
      }
      this.img = this.collection[movement][this.currentImage];
      this.currentImage++;
      if (this.canPosX > 720) { this.canPosX = -150 }
      this.canPosX = this.canPosX + 8;
    }, 200);
  }

  walkRight() {
    this.currentImage = 0;
    setInterval(() => {
      if (this.currentImage >= this.collection.walk.length) {
        this.currentImage = 0;
      }
      this.img = this.collection.walk[this.currentImage];
      this.currentImage++;
      if (this.canPosX > 720) { this.canPosX = -150 }
      this.canPosX = this.canPosX + 8;
    }, 200);
  }

  // FIXME TimeOut
  jump(startX) {
    this.canPosX = startX;
    for (let i = 0; i < this.collection.jump.length; i++) {
      setTimeout(this.pepeJump, 500);
    }
  }

  pepeJump() {
    let img = this.collection.jump[i];
    this.ctx.drawImage(img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
  }


  // REVIEW Warum müssen die genaue als Objekt vorgeladen werden?
  loadCollection(imgPathsName, key) {
    this.collection[key] = [];
    this[imgPathsName].forEach(element => {
      let newImg = new Image();
      newImg.src = element;
      this.collection[key].push(newImg);
    })
  }


  imgPathsIdle = [
    'img/2_character_pepe/1_idle/idle/I-1.png',
    'img/2_character_pepe/1_idle/idle/I-2.png',
    'img/2_character_pepe/1_idle/idle/I-3.png',
    'img/2_character_pepe/1_idle/idle/I-4.png',
    'img/2_character_pepe/1_idle/idle/I-5.png',
    'img/2_character_pepe/1_idle/idle/I-6.png',
    'img/2_character_pepe/1_idle/idle/I-7.png',
    'img/2_character_pepe/1_idle/idle/I-8.png',
    'img/2_character_pepe/1_idle/idle/I-9.png',
    'img/2_character_pepe/1_idle/idle/I-10.png'
  ];

  imgPathsLongIdle = [
    'img/2_character_pepe/1_idle/long_idle/I-11.png',
    'img/2_character_pepe/1_idle/long_idle/I-12.png',
    'img/2_character_pepe/1_idle/long_idle/I-13.png',
    'img/2_character_pepe/1_idle/long_idle/I-14.png',
    'img/2_character_pepe/1_idle/long_idle/I-15.png',
    'img/2_character_pepe/1_idle/long_idle/I-16.png',
    'img/2_character_pepe/1_idle/long_idle/I-17.png',
    'img/2_character_pepe/1_idle/long_idle/I-18.png',
    'img/2_character_pepe/1_idle/long_idle/I-19.png',
    'img/2_character_pepe/1_idle/long_idle/I-20.png'
  ];

  imgPathsWalk = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'
  ];

  imgPathsJump = [
    'img/2_character_pepe/3_jump/J-31.png',
    'img/2_character_pepe/3_jump/J-32.png',
    'img/2_character_pepe/3_jump/J-33.png',
    'img/2_character_pepe/3_jump/J-34.png',
    'img/2_character_pepe/3_jump/J-35.png',
    'img/2_character_pepe/3_jump/J-36.png',
    'img/2_character_pepe/3_jump/J-37.png',
    'img/2_character_pepe/3_jump/J-38.png',
    'img/2_character_pepe/3_jump/J-39.png',
  ];

  imgPathsHurt = [
    'img/2_character_pepe/4_hurt/H-41.png',
    'img/2_character_pepe/4_hurt/H-42.png',
    'img/2_character_pepe/4_hurt/H-43.png'
  ];

  imgPathsDead = [
    'img/2_character_pepe/5_dead/D-51.png',
    'img/2_character_pepe/5_dead/D-52.png',
    'img/2_character_pepe/5_dead/D-53.png',
    'img/2_character_pepe/5_dead/D-54.png',
    'img/2_character_pepe/5_dead/D-55.png',
    'img/2_character_pepe/5_dead/D-56.png',
    'img/2_character_pepe/5_dead/D-57.png',
  ];
}