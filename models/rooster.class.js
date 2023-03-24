class Rooster extends GeneralObject {
  imageSrcPath = 'img/4_enemie_boss_chicken/1_walk/G1.png';
  originWidth = 1045;
  originHeight = 1217;
  scaleFactor = 0.19;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = Math.floor(this.originHeight * this.scaleFactor);
  canPosX = 430;
  canPosY = 220;

  constructor() {
    super().loadImage(this.imageSrcPath);
    console.log(this.basicCharacterPosition);
  }
}