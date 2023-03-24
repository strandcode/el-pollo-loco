class Background extends GeneralObject {
  imageSrcPath = 'img/5_background/complete_background.png';
  originWidth = 3840;
  originHeight = 1080;
  scaleFactor = 0.4444;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = 0;
  canPosY = 0;

  constructor() {
    super().loadImage(this.imageSrcPath);
  }
}