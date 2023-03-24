class Cloud {
  x = 10;
  y = -25; //480 - (300)
  width = 3840 * 0.4444;
  height = 1080 * 0.444;
  ctx;
  // src: 3840 x 1080
  constructor() {
    this.ctx = canvas.getContext('2d');
    this.loadImage('img/5_background/layers/4_clouds/full-clouds-reverse.png');
    this.drawCloud();
    this.move();
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  drawCloud() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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