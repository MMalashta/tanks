import * as Phaser from 'phaser';
import { TILE_SIZE } from '../config';
import { level } from '../levels/test';
import { TILE, type TileType } from '../types';
import Player from '../entities/Player';

const TEXTURE_BY_TILE: Partial<Record<TileType, string>> = {
  [TILE.BRICK]: 'brick',
  [TILE.STEEL]: 'steel',
};

/** Centre of a grid cell in world pixels. */
const cellCenter = (index: number): number => index * TILE_SIZE + TILE_SIZE / 2;

export default class GameScene extends Phaser.Scene {
  private walls!: Phaser.Physics.Arcade.StaticGroup;
  private player!: Player;

  constructor() {
    super('Game');
  }

  create(): void {
    this.walls = this.physics.add.staticGroup();
    level.tiles.forEach((row, y) => {
      row.forEach((tile, x) => {
        const texture = TEXTURE_BY_TILE[tile];
        if (texture) {
          this.walls.create(cellCenter(x), cellCenter(y), texture);
        }
      });
    });

    const { col, row } = level.playerSpawn;
    this.player = new Player(this, cellCenter(col), cellCenter(row));

    this.physics.add.collider(this.player, this.walls);
  }

  update(): void {
    this.player.update();
  }
}
