class Pepe extends GeneralObject {
  originWidth = 610;
  originHeight = 1200;
  scaleFactor = 0.25;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 100;
  canPosY = 130;
  currentImage = 0;



  isPepeJumping = false;
  isPepeFlying = false;
  isPepeWalking = false;

  // TODO Richtige Sounds besorgen, die nur so lang sind, für einen Schritt
  walking_sound = new Audio('audio/running_clipped.mp3');

  worldFocus = 0; // Verankerung Pepe und worldFocus

  constructor() {
    super();
    this.loadCollection('imgPathsIdle', 'idle');
    this.loadCollection('imgPathsLongIdle', 'longIdle');
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsJump', 'jump');
    this.loadCollection('imgPathsHurt', 'hurt');
    this.loadCollection('imgPathsDead', 'dead');
    this.img = this.collection.idle[0];
    this.applyGravity();
    this.checkPepeOnGround();
  }


  moveRight() {
    if (this.canPosX >= 100 && this.canPosX < 4200) {
      this.canPosX += 8;
      this.worldFocus += -8;
      if (!this.isPepeFlying || !this.isPepeJumping) {
        this.animateWalk();
      }
    }
  }

  moveLeft() {
    // Damit Pepe nicht aus der Welt rennt?
    if (this.canPosX > 110 && this.canPosX < 4300) {
      this.canPosX += -8;
      this.worldFocus += 8;
      if (!this.isPepeFlying || !this.isPepeJumping) {
        this.animateWalk();
      }
    }
  }

  animateWalk() {
    if (!this.isPepeFlying || !this.isPepeJumping) {
      if (this.currentImage <= 0) {
        this.currentImage = this.collection.walk.length;
      }
      if (this.currentImage >= this.collection.walk.length) {
        this.currentImage = 0;
      }

      // Setzt über das currentImage das Bild aus der walk serie
      this.img = this.collection.walk[this.currentImage];
      this.currentImage++;
      this.walking_sound.play();
    }
  }


  jump() {
    this.isPepeJumping = true;
    this.isPepeFlying = true;
    this.canPosY -= this.speedY;
    this.speedY = 10;
    if (this.canPosY < -50) {
      this.speedY = 0;
    }
  }

  // TODO noch irgendwo mit einbauen?
  checkPepeOnGround() {
    setInterval(() => {
      if (this.canPosY >= 125) {
        this.isPepeJumping = false;
        this.isPepeFlying = false;
      }
    }, 100);
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