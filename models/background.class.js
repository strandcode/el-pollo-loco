class Background extends MovableObject {
  x = 0;
  y = 0;
  width = 3840 * 0.4444;
  height = 1080 * 0.4444;
  // src: 3840 x 1080
  constructor() {
    super().loadImage('img/5_background/complete_background.png');
  }
}