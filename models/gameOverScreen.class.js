class GameOverScreen extends GeneralObject {
  originWidth = 1920;
  originHeight = 1080;

  // Scales automatically to  canvas full height
  scaleFactor = (this.canvas.height / this.originHeight).toFixed(6);
  // scaledWidth = this.originWidth * this.scaleFactor;
  scaledWidth = this.canvas.width;
  scaledHeight = this.canvas.height;
  canPosX = 0;
  canPosY = -1500;

  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.img = this.collection.complete[0];
  }

  imgPathsComplete = [
    'img/9_intro_outro_screens/game_over/game over.png'
  ];

}