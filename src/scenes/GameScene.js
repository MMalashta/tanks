import * as Phaser from 'phaser';
import { TILE_SIZE } from '../config.js';
import { level, TILE } from '../levels/test.js';
import Player from '../entities/Player.js';

const TEXTURE_BY_TILE = { [TILE.BRICK]: 'brick', [TILE.STEEL]: 'steel' };

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.walls = this.physics.add.staticGroup();
    level.tiles.forEach((row, y) => {
      row.forEach((tile, x) => {
        const texture = TEXTURE_BY_TILE[tile];
        if (texture) {
          this.walls.create(x * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, texture);
        }
      });
    });

    const { col, row } = level.playerSpawn;
    this.player = new Player(this, col * TILE_SIZE + TILE_SIZE / 2, row * TILE_SIZE + TILE_SIZE / 2);

    this.physics.add.collider(this.player, this.walls);
  }

  update() {
    this.player.update();
  }
}
