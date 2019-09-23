class Seppelinare extends Entity {
  constructor(image, frame, scaleX, scaleY) {
    super(image, frame, scaleX, scaleY);

    this.body.x = this.randomX();
    this.body.y = this.randomY();
    this.body.displayWidth *= 1.5;
    this.body.displayHeight *= 1.5;
    this.frame = frame;
    this.body.setCircle(80, 0, 0);
  }
  randomX() {
    return Math.ceil(Math.random() * screenWidth);
  }
  randomY() {
    return Math.ceil(Math.random() * screenHeight - screenHeight);
  }
}
