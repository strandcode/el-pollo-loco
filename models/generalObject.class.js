class GeneralObject {
  imageSrcPath;
  originWidth;
  originHeight;
  scaleFactor;
  scaledWidth;
  scaledHeight;
  canPosX;
  canPosY;
  canvas;
  ctx;

  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveLeft() {
    console.log('Moving left');
  }

  moveRight() {
    console.log('Moving right');
  }

  // gravitation() 

}