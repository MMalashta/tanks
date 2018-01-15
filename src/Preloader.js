export default class Preloader {
  preload() {
    this.load.tilemap('level1', 'assets/map_level1.csv');
    this.load.image('tileset', 'assets/tileset32.png');
    this.load.spritesheet('tanks', 'assets/tileset32.png', 32, 30);
  }

  create() {
    this.state.start('Level1')
  }
}