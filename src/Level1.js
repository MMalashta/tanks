export default class Level1 {
  create() {
    this.stage.backgroundColor = '000000';
    const map = this.add.tilemap('level1', 16, 16);
    map.addTilesetImage('tileset');

    const layer = map.createLayer(0);
    layer.scale.set(2);
  }

  update() {

  }
}