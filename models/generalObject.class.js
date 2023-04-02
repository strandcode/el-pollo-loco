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
  currentImage = 0;


  isAlive = true;

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

  move(x, y) {
    this.canPosX = x;
    this.canPosY = y;
  }

  moveX(x) {
    this.canPosX = x;
  }

  moveY(y) {
    this.canPosY = y;
  }

  drawFrames() {
    if (!(this instanceof Background)
      && !(this instanceof Clouds)
      && !(this instanceof StatusBar)) {

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
      && !(this instanceof Clouds)
      && !(this instanceof StatusBar)) {

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

  checkIsOffGround() {
    setInterval(() => {
      if (this.canPosY >= 125) {
        this.isFlying = false;
      }
    }, 100);
  }




  // world.pepe.isColliding(enemy)
  isColliding(movableObject) {
    let characterX = this.canPosX + this.offsetX;
    let characterY = this.canPosY + this.offsetY;
    let characterW = this.scaledWidth + this.offsetW;
    let characterH = this.scaledHeight + this.offsetH;

    let movableObjectX = movableObject.canPosX + movableObject.offsetX;
    let movableObjectY = movableObject.canPosY + movableObject.offsetY;
    let movableObjectW = movableObject.scaledWidth + movableObject.offsetW;
    let movableObjectH = movableObject.scaledHeight + movableObject.offsetH;

    return characterX + characterW >= movableObjectX
      && characterX <= movableObjectX + movableObjectW
      && characterY + characterH >= movableObjectY
      && characterY <= movableObjectY + movableObjectH
    // && movableObject.onCollisionCourse;
    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

  }

  //  NOTE Diese Funktion isColliding(movableObject) überprüft, ob das Objekt, auf dem diese Funktion aufgerufen wird, mit einem anderen Objekt kollidiert, das als Parameter movableObject übergeben wird. Die Funktion gibt einen booleschen Wert zurück, der angibt, ob eine Kollision vorliegt oder nicht.

  // Um festzustellen, ob eine Kollision vorliegt, werden die Position und Größe des Objekts, auf dem die Funktion aufgerufen wird, sowie die Position und Größe des übergebenen movableObject miteinander verglichen.

  // Zuerst werden die Koordinaten des Objekts, auf dem die Funktion aufgerufen wird, unter Berücksichtigung der Verschiebung (offset) berechnet. Dann wird die Breite und Höhe des Objekts unter Berücksichtigung der Verschiebung und Skalierung (scaledWidth) berechnet.

  // Dann werden die Koordinaten des movableObject berechnet, ebenfalls unter Berücksichtigung der Verschiebung, und die Breite und Höhe des movableObject unter Berücksichtigung der Verschiebung und Skalierung berechnet.

  // Schließlich werden die Positionen und Größen der beiden Objekte miteinander verglichen, um festzustellen, ob eine Kollision vorliegt. Die Bedingungen in der return-Anweisung überprüfen, ob die rechte Seite des Objekts auf der linken Seite des movableObject liegt und ob die linke Seite des Objekts auf der rechten Seite des movableObject liegt. Wenn beide Bedingungen erfüllt sind, liegt eine Kollision vor.

  // Die auskommentierten Bedingungen, die die vertikale Kollision prüfen, können optional aktiviert werden, um auch vertikale Kollisionen zu berücksichtigen. Außerdem gibt es eine weitere Bedingung, die ebenfalls auskommentiert ist, um sicherzustellen, dass das Objekt nur dann kollidiert, wenn es in die gleiche Richtung wie das movableObject bewegt wird. Dies könnte nützlich sein, wenn man beispielsweise auf einem Objekt stehen kann.



  playAudio(sound) {
    this[sound].play();
  }

}