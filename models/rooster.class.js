class Rooster extends GeneralObject {
  originWidth = 1045;
  originHeight = 1217;
  scaleFactor = 0.19;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = Math.floor(this.originHeight * this.scaleFactor);
  canPosX = 4500;
  canPosY = 220;

  offsetX = 10;
  offsetY = 30;
  offsetW = -15;
  offsetH = -40;

  energyLevel = 100;

  alertedCount = 0;

  // NOTE Intervals of the rooster

  interval__IsAlerted;
  interval__IsAttacking;
  interval__GetHurt;
  interval__IsDying;


  constructor() {
    super();
    this.loadCollection('imgPathsWalk', 'walk');
    this.loadCollection('imgPathsAlert', 'alert');
    this.loadCollection('imgPathsAttack', 'attack');
    this.loadCollection('imgPathsHurt', 'hurt');
    this.loadCollection('imgPathsDying', 'dying');
    this.img = this.collection.walk[0];
    // REVIEW this.checkIMG();
  }


  // REVIEW checkIMG() {
  //   setInterval(() => {
  //     console.log('Rooster-IMG' + this.img.src);
  //   }, 500);
  // }


  // Wird nicht aufgerufen
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


  isAlerted() {
    this.currentImage = 0;
    // TODO this.playAudio('get_hurt_sound');
    this.interval__IsAlerted = setInterval(() => {
      this.img = this.collection.alert[this.currentImage];
      this.currentImage++;
      if (this.currentImage > this.collection.alert.length) {
        clearInterval(this.interval__IsAlerted);
        this.alertedCount++;
        this.img = this.collection.alert[this.collection.alert.length - 1];
        if (this.alertedCount >= 5) {
          this.alertedCount = 0;
          this.isAttacking();
        } else {
          // setTimeout(() => {
          this.isAlerted();
          // }, 2000);
        }
      }
    }, 100);
  }




  isAttacking() {
    // und pepe in sichtweite ist
    if (this.isAlive) {
      this.currentImage = 0;
      // TODO this.playAudio('get_hurt_sound');
      this.interval__IsAttacking = setInterval(() => {
        this.img = this.collection.attack[this.currentImage];
        this.currentImage++;
        if (this.currentImage == 3) { this.canPosY -= 30 }
        if (this.currentImage == 4) { this.canPosY -= 30 }
        if (this.currentImage == 5) { this.canPosY -= 30 }
        if (this.currentImage == 6) { this.canPosY += 30 }
        if (this.currentImage == 7) { this.canPosY += 60 }
        this.canPosX -= 20;
        if (this.currentImage > this.collection.attack.length) {
          clearInterval(this.interval__IsAttacking);
          this.img = this.collection.walk[0];
          this.isAlerted();
        }
      }, 100);
    }
  }


  isAttacked() {
    if (this.isAlive) {
      // TODO this.playAudio('');
      this.animateGetHurt();
      this.energyLevel -= 20;
      console.log('Rooster is attacked! Energy: ' + this.energyLevel);

      if (this.energyLevel <= 0) {
        this.energyLevel = 0;

        this.animateDying();
      }
    }
  }

  animateGetHurt() {
    this.currentImage = 0;
    // TODO this.playAudio('');
    this.interval__GetHurt = setInterval(() => {
      this.img = this.collection.hurt[this.currentImage];
      this.currentImage++;
      if (this.currentImage > this.collection.hurt.length) {
        clearInterval(this.interval__GetHurt);
        this.img = this.collection.hurt[this.collection.hurt.length - 1];
      }
    }, 100);
  }


  clearAllIntervals() {
    clearInterval(this.interval__IsAlerted);
    clearInterval(this.interval__IsAttacking);
    clearInterval(this.interval__GetHurt);
    // clearInterval(this.interval__IsDying);
    console.log('Alle Intervalle in Rooster gecleared');
  }


  animateDying() {

    this.currentImage = 0;
    // TODO this.playAudio('');
    this.isAlive = false;
    this.interval__IsDying = setInterval(() => {
      this.img = this.collection.dying[this.currentImage];
      this.currentImage++;
      if (this.currentImage > this.collection.dying.length) {
        clearInterval(this.interval__IsDying);
        this.img = this.collection.dying[2];

        setTimeout(() => {
          console.log('You win!!'); // TODO
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