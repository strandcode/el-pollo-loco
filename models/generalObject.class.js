class GeneralObject {
  originWidth;
  originHeight;
  scaleFactor;
  scaledWidth;
  scaledHeight;
  canPosX;
  canPosY;
  canvas;
  ctx;
  speedY = 0;
  accelaration = 1;

  collection = {};
  currentImage;

  // NOTE Setzt den Status, ob das currentImage gedreht ist.
  isImageFlipped = false;

  constructor() {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  // NOTE Diese Funktion zeichnet das currentImage in die world

  // REVIEW Warum müssen die genaue als Objekt vorgeladen werden?
  loadCollection(imgPathsName, key) {
    this.collection[key] = [];
    this[imgPathsName].forEach(element => {
      let newImg = new Image();
      newImg.src = element;
      this.collection[key].push(newImg);
    })
  }

  draw() {
    if (this.isImageFlipped) {
      this.flipImage();
    } else {
      this.isImageFlipped = false;
      this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
    }
  }

  flipImage() {
    // Speichert das aktuelle Bild mit dessen Eigenschaften   
    this.ctx.save();

    // Berechnet die Veschiebung
    let shift = (this.canPosX * 2) + this.scaledWidth

    // Verschiebt die gespiegelte Position wieder in den sichtbaren bereich
    this.ctx.translate(shift, 0);

    // Spiegelt das aktuelle Bild von Pepe über die y-Achse
    this.ctx.scale(-1, 1);

    // Zeichnet das gespiegelte Bild in das Canvas
    this.ctx.drawImage(this.img, this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);

    // Stellt das ursprüngliche (gesavete) Bild wieder her.
    this.ctx.restore()
  }

  applyGravity() {
    let gravity = setInterval(() => {
      if (this.canPosY < 130) {
        this.canPosY += this.speedY;
        this.speedY += this.accelaration;
        if (this.canPosY <= 130) {
          this.canPosY = 130;
          this.isPepeJumping = false;
          this.isPepeFlying = false;
          clearInterval(gravity);
        }
      }
    }, 60);
  }



}