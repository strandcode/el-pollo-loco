class Rooster extends GeneralObject {
  originWidth = 1045;
  originHeight = 1217;
  scaleFactor = 0.19;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = Math.floor(this.originHeight * this.scaleFactor);
  canPosX = 3500;
  canPosY = 220;

  offsetX = 10;
  offsetY = 30;
  offsetW = -15;
  offsetH = -40;

  energyLevel = 100;

  constructor() {
    super();
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsAlert', 'alert');
    this.loadCollection('imgPathsAttack', 'attack');
    this.loadCollection('imgPathsHurt', 'hurt');
    this.loadCollection('imgPathsDying', 'dying');
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
      this.canPosX = this.canPosX - 12;
    }, 200);
  }

  isAttacked() {
    if (this.isAlive) {
      // this.animateGetHurt();
      this.energyLevel -= 20;
      console.log('Rooster is attacked! Energy: ' + this.energyLevel);

      if (this.energyLevel <= 0) {
        this.energyLevel = 0;

        this.animateDying();
      }
    }
  }



  animateDying() {
    this.currentImage = 0;
    this.isAlive = false;
    let interval = setInterval(() => {
      this.img = this.collection.dying[this.currentImage];
      this.currentImage++;
      console.log(this.currentImage);
      if (this.currentImage > this.collection.dying.length) {
        clearInterval(interval);
        this.img = this.collection.dying[2];
        setTimeout(() => {
          console.log('You win!!');
        }, 1000);
      }
    }, 300);
  }




  imgPathsWalk = [
    'img/4_enemie_boss_chicken/1_walk/G1.png',
    'img/4_enemie_boss_chicken/1_walk/G2.png',
    'img/4_enemie_boss_chicken/1_walk/G3.png',
    'img/4_enemie_boss_chicken/1_walk/G4.png'
  ];

  imgPathsAlert = [
    'img/4_enemie_boss_chicken/2_alert/G5.png',
    'img/4_enemie_boss_chicken/2_alert/G6.png',
    'img/4_enemie_boss_chicken/2_alert/G7.png',
    'img/4_enemie_boss_chicken/2_alert/G8.png',
    'img/4_enemie_boss_chicken/2_alert/G9.png',
    'img/4_enemie_boss_chicken/2_alert/G10.png',
    'img/4_enemie_boss_chicken/2_alert/G11.png',
    'img/4_enemie_boss_chicken/2_alert/G12.png'
  ];

  imgPathsAttack = [
    'img/4_enemie_boss_chicken/3_attack/G13.png',
    'img/4_enemie_boss_chicken/3_attack/G14.png',
    'img/4_enemie_boss_chicken/3_attack/G15.png',
    'img/4_enemie_boss_chicken/3_attack/G16.png',
    'img/4_enemie_boss_chicken/3_attack/G17.png',
    'img/4_enemie_boss_chicken/3_attack/G18.png',
    'img/4_enemie_boss_chicken/3_attack/G19.png',
    'img/4_enemie_boss_chicken/3_attack/G20.png',
  ];

  imgPathsHurt = [
    'img/4_enemie_boss_chicken/4_hurt/G21.png',
    'img/4_enemie_boss_chicken/4_hurt/G22.png',
    'img/4_enemie_boss_chicken/4_hurt/G23.png',
  ];

  imgPathsDying = [
    'img/4_enemie_boss_chicken/5_dead/G24.png',
    'img/4_enemie_boss_chicken/5_dead/G25.png',
    'img/4_enemie_boss_chicken/5_dead/G26.png',
  ];


}