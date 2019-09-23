class Player extends Entity {
  constructor(image, x, y) {
    super(image, x, y);

    this.body.body.collideWorldBounds = true;

    this.body.body.setCircle(100, 0, -100);
  }
}
