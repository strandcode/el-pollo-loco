class RoosterIcon extends GeneralObject {
  originWidth = 158;
  originHeight = 158;
  scaleFactor = 0.3;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;;
  canPosX = this.canvas.width - 175;
  canPosY = 22;

  constructor() {
    super();
    this.loadCollection('imgPathsStatusBarRoosterIcon', 'roosterIcon');
    this.img = this.collection.roosterIcon[0];
  }

  imgPathsStatusBarRoosterIcon = [
    'img/7_statusbars/3_icons/icon_health_endboss.png'
  ];

}