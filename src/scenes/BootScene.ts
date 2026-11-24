import * as Phaser from 'phaser';
import { TILE_SIZE } from '../config';

// Generates placeholder textures in code. Real (CC0) art replaces these in a later step.
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create(): void {
    this.makeTank();
    this.makeBrick();
    this.makeSteel();
    this.scene.start('Game');
  }

  // Drawn facing up; the sprite is rotated to face other directions.
  private makeTank(): void {
    const g = this.make.graphics({}, false);
    const s = 28;
    g.fillStyle(0x3a5f2a).fillRect(0, 2, 7, s - 4); // left track
    g.fillStyle(0x3a5f2a).fillRect(s - 7, 2, 7, s - 4); // right track
    g.fillStyle(0x6fa84a).fillRect(6, 6, s - 12, s - 10); // hull
    g.fillStyle(0x8fd06a).fillCircle(s / 2, s / 2 + 2, 6); // turret
    g.fillStyle(0xd8f0c0).fillRect(s / 2 - 2, 0, 4, s / 2); // barrel
    g.generateTexture('tank', s, s);
    g.destroy();
  }

  private makeBrick(): void {
    const g = this.make.graphics({}, false);
    const t = TILE_SIZE;
    g.fillStyle(0x7a3b1e).fillRect(0, 0, t, t);
    g.fillStyle(0xb5562a);
    const brickW = t / 2;
    const brickH = t / 4;
    for (let row = 0; row < 4; row += 1) {
      const offset = row % 2 === 0 ? 0 : brickW / 2; // stagger every other row
      for (let x = -offset; x < t; x += brickW) {
        const x0 = Math.max(x, 0) + 1;
        const x1 = Math.min(x + brickW, t) - 1;
        g.fillRect(x0, row * brickH + 1, x1 - x0, brickH - 2);
      }
    }
    g.generateTexture('brick', t, t);
    g.destroy();
  }

  private makeSteel(): void {
    const g = this.make.graphics({}, false);
    const t = TILE_SIZE;
    g.fillStyle(0x6b6f78).fillRect(0, 0, t, t);
    g.fillStyle(0xb9bec8).fillRect(3, 3, t - 6, t - 6);
    g.fillStyle(0x8a8f99).fillRect(8, 8, t - 16, t - 16);
    g.generateTexture('steel', t, t);
    g.destroy();
  }
}
