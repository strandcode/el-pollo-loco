class Chicken extends MovableObject {
  x = 330;
  y = 380; //480 - (300)
  width = 248 * 0.25; // 62
  height = 243 * 0.25; // 60,75
  // src: 248 x 243
  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
  }
}