class GeneralObject {
  imageSrcPath;
  originWidth;
  originHeight;
  scaleFactor;
  scaledWidth;
  scaledHeight;
  canPosX;
  canPosY;

  constructor() {
    console.log('GeneralObject was used');
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