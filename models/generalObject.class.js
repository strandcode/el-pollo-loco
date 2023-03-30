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

  offsetX = 0;
  offsetY = 0;
  offsetW = 0;
  offsetH = 0;

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
      // this.drawFrames();
      this.drawOffsetFrames();
    }
  }

  drawFrames() {
    if (!(this instanceof Background)
      && !(this instanceof Clouds)) {

      if (this instanceof Pepe) {
        this.ctx.strokeStyle = "red";
      } else {
        this.ctx.strokeStyle = "green";
      }
      this.ctx.beginPath();
      this.ctx.lineWidth = "1";
      this.ctx.rect(this.canPosX, this.canPosY, this.scaledWidth, this.scaledHeight);
      this.ctx.stroke();
    }
  }

  drawOffsetFrames() {
    if (!(this instanceof Background)
      && !(this instanceof Clouds)) {

      if (this instanceof Pepe) {
        this.ctx.strokeStyle = "rebeccapurple";
      } else {
        this.ctx.strokeStyle = "green";
      }
      this.ctx.beginPath();
      this.ctx.lineWidth = "1";
      this.ctx.strokeRect(
        (this.canPosX + this.offsetX),
        (this.canPosY + this.offsetY),
        (this.scaledWidth + this.offsetW),
        (this.scaledHeight + this.offsetH));
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
    setInterval(() => {
      if (this.isAboveGround()) {
        this.canPosY -= this.speedY;
        this.speedY -= this.accelaration;
      }
    }, 60);
  }

  isAboveGround() {
    return this.canPosY < 130;
  }

  // Junus Formel
  isColliding() {
    return this.canPosX + this.scaledWidth
  }

  isColliding(obj) {
    return (this.canPosX + this.scaledWidth) >= obj.canPosX &&
      this.canPosX <= (obj.canPosX + obj.scaledWidth)
    // &&
    // (this.canPosY + this.offsetY + this.height) >= obj.canPosY &&
    // (this.canPosY + this.offsetY) <= (obj.canPosY + obj.height) &&
    // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

  }

}