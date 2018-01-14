export default class Preloader {
  preload() {
    this.load.tilemap('level1', 'assets/map_level1.csv');
    this.load.image('tileset', 'assets/tileset.png');
    this.load.spritesheet('tanks', 'assets/tileset.png', 16, 16);
  }

  create() {
    this.state.start('Level1')
  }
}