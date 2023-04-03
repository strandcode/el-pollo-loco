class StatusBarRooster extends GeneralObject {
  originWidth = 595;
  originHeight = 158;
  scaleFactor = 0.27;
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = this.canvas.width - this.scaledWidth - 20;
  canPosY = 25;
  srcPath = 'barHealthGreen';

  constructor() {
    super();
    this.loadCollection('imgPathsStatusBarOrange', 'barRoosterOrange');
    this.img = this.collection.barRoosterOrange[0];
  }

  imgPathsStatusBarOrange = [
    'img/7_statusbars/4_bar_elements/statusbar_orange.png',
  ];


}