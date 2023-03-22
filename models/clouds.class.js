class Cloud extends MovableObject {
  x = 10;
  y = -25; //480 - (300)
  width = 3840 * 0.4444;
  height = 1080 * 0.444;
  // src: 3840 x 1080
  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/full-clouds-reverse.png');
    this.move();
  }

  move() {
    let movingClouds = setInterval(() => {
      this.x = this.x - 1;
      if (this.x <= -1400) {
        this.x = 600;
        clearInterval(movingClouds);
        this.move();
      }
    }, 50);
  }
}


// 