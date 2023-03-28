class Background extends GeneralObject {
  originWidth = 3840;
  originHeight = 1080;

  // Scales automatically to  canvas full height
  scaleFactor = (this.canvas.height / this.originHeight).toFixed(6);
  scaledWidth = this.originWidth * this.scaleFactor;
  scaledHeight = this.originHeight * this.scaleFactor;
  canPosX = 0;
  canPosY = 0;

  constructor() {
    super();
    this.loadCollection('imgPathsComplete', 'complete');
    this.loadCollection('imgPathsFirstLayer', 'firstLayer');
    this.loadCollection('imgPathsSecondLayer', 'secondLayer');
    this.loadCollection('imgPathsThirdLayer', 'thirdLayer');
    this.loadCollection('imgPathsClouds', 'clouds');
    this.loadCollection('imgPathsAir', 'air');
    this.img = this.collection.complete[0];
  }

  drawBackground() {

    const layers = [
      { source: this.collection.air[0] },
      { source: this.collection.thirdLayer[0] },
      { source: this.collection.secondLayer[0] },
      { source: this.collection.firstLayer[0] },
      // { source: this.collection.clouds[0] } // Clouds were set in class clouds.class.js
    ];

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const worldWidth = 3; // Anzahl, wie oft der Hintergrund nach rechts wiederholt werden soll
      for (let w = 0; w < worldWidth; w++) {
        this.ctx.drawImage(layer.source, (w * (this.scaledWidth)), 0, this.scaledWidth, this.scaledHeight);
      }
    }

  }

  imgPathsComplete = [
    'img/5_background/complete_background.png',
  ];

  imgPathsFirstLayer = [
    'img/5_background/layers/1_first_layer/full.png',
  ];

  imgPathsSecondLayer = [
    'img/5_background/layers/2_second_layer/full.png',
  ];

  imgPathsThirdLayer = [
    'img/5_background/layers/3_third_layer/full.png',
  ];

  imgPathsClouds = [
    'img/5_background/layers/4_clouds/full.png',
  ];
  imgPathsAir = [
    'img/5_background/layers/5_Air/air.png',
  ];




}