import * as Phaser from 'phaser';
import { WORLD_SIZE } from './config';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

new Phaser.Game({
  type: Phaser.AUTO,
  width: WORLD_SIZE,
  height: WORLD_SIZE,
  parent: 'game',
  backgroundColor: '#000000',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  scene: [BootScene, GameScene],
});
