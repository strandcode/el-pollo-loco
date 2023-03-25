class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  THROW = false;

  constructor() {
    this.checkKeyboard();
  }

  checkKeyboard() {

    window.addEventListener('keydown', (event) => {
      console.log(event);
      console.log(event.code);
      if (event.code == 'Space') { keyboard.SPACE = true; };
      if (event.code == 'ArrowLeft') { keyboard.LEFT = true; };
      if (event.code == 'ArrowRight') { keyboard.RIGHT = true; };
      if (event.code == 'ArrowUp') { keyboard.UP = true; };
      if (event.code == 'ArrowDown') { keyboard.DOWN = true; };
      if (event.code == 'KeyD') { keyboard.THROW = true; };
      console.log(keyboard);
    });


    // Event-Listener zum Setzen aller Werte auf "false" bei Tasten-Release
    window.addEventListener('keyup', (event) => {
      for (let key in keyboard) {
        keyboard[key] = false;
      }
    });
  }

}