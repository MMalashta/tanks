import * as Phaser from 'phaser';
import type { Direction } from '../types';

const SPEED = 100;

// Sprite angle for each facing (the texture is drawn facing up).
const ANGLE: Record<Direction, number> = { up: 0, right: 90, down: 180, left: -90 };

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private readonly cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'tank');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);

    // Typed as nullable because the keyboard plugin can be disabled in the game config.
    const { keyboard } = scene.input;
    if (!keyboard) throw new Error('Player: keyboard input is disabled');
    this.cursors = keyboard.createCursorKeys();
  }

  update(): void {
    const { left, right, up, down } = this.cursors;
    this.setVelocity(0);

    // One direction at a time: tanks don't move diagonally.
    if (left.isDown) this.move('left', -SPEED, 0);
    else if (right.isDown) this.move('right', SPEED, 0);
    else if (up.isDown) this.move('up', 0, -SPEED);
    else if (down.isDown) this.move('down', 0, SPEED);
  }

  private move(direction: Direction, vx: number, vy: number): void {
    this.setAngle(ANGLE[direction]);
    this.setVelocity(vx, vy);
  }
}
