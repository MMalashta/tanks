export default class Preloader extends Phaser.State {
  preload() {
    this.game.load.tilemap('level1', 'assets/map_level1.csv');
    this.game.load.image('tileset', 'assets/tileset32.png');
    this.game.load.spritesheet('tanks', 'assets/tileset32.png', 32, 30);
  }

  create() {
    this.game.state.start('Level1')
  }
}