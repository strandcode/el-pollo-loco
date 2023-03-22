class MovableObject {
  x;
  y;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log('Moving right');
  }

  moveLeft() {
    console.log('Moving left');
  }
}