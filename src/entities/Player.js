import * as Phaser from 'phaser';

const SPEED = 100;

// Sprite angle for each facing (the texture is drawn facing up).
const ANGLE = { up: 0, right: 90, down: 180, left: -90 };

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'tank');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    const { left, right, up, down } = this.cursors;
    this.setVelocity(0);

    // One direction at a time: tanks don't move diagonally.
    if (left.isDown) this.move('left', -SPEED, 0);
    else if (right.isDown) this.move('right', SPEED, 0);
    else if (up.isDown) this.move('up', 0, -SPEED);
    else if (down.isDown) this.move('down', 0, SPEED);
  }

  move(direction, vx, vy) {
    this.setAngle(ANGLE[direction]);
    this.setVelocity(vx, vy);
  }
}
