import Player from '../entities/Player';
let layer;
let map;

export default class Level1 extends Phaser.State {
  create() {
    map = this.add.tilemap('level1', 32, 32);
    map.addTilesetImage('tileset');

    layer = map.createLayer(0);
    //layer.debug = true;

    this.game.slopes.convertTilemapLayer(layer, {
      16: 'FULL',
      17: 'HALF_RIGHT',
      18: 'HALF_BOTTOM',
      19: 'HALF_LEFT',
      41: 'FULL',
      45:  'HALF_TOP',
    });
    map.setCollisionBetween(0, 100, true, 0);

    this.player = new Player(this.game);
		this.player.init();
  }

  update() {
    this.physics.arcade.collide(this.player.sprite, layer);
    this.player.update();
  }

  render() {
    //  Useful debug things you can turn on to see what's happening
 
    // game.debug.spriteBounds(sprite);
    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.body(sprite);
    // this.game.debug.body(player);
  }
}