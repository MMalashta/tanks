import ArcadeSlopes from 'phaser-arcade-slopes'
let controls;
let layer;
let map;
let player;
const playerVelocity = 40;

export default class Level1 {
  create() {
    this.stage.backgroundColor = '000000';
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.plugins.add(Phaser.Plugin.ArcadeSlopes)

    map = this.add.tilemap('level1', 32, 32);
    map.addTilesetImage('tileset');

    layer = map.createLayer(0);
    //layer.debug = true;

    this.game.slopes.convertTilemapLayer(layer,{
      16: 'FULL',
      17: 'HALF_RIGHT',
      18: 'HALF_BOTTOM',
      19: 'HALF_LEFT',
      41: 'FULL',
      45:  'HALF_TOP',
    });
    map.setCollisionBetween(0, 100, true, 0);

    controls = this.input.keyboard.createCursorKeys();

    player = this.add.sprite(135, 448, 'tanks');
    this.physics.enable(player);
    this.game.slopes.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add('left', [2,3], 10, true);
    player.animations.add('right', [6,7], 10, true);
    player.animations.add('up', [0,1], 10, true);
    player.animations.add('down', [4,5], 10, true);
  }

  update() {

    this.physics.arcade.collide(player, layer);
    player.body.velocity = {
      x: 0,
      y: 0,
    }
    if (controls.left.isDown) {
      player.animations.play('left');
      player.body.velocity.x -= playerVelocity;
    } else if (controls.right.isDown) {
      player.animations.play('right');
      player.body.velocity.x += playerVelocity;
    } else if (controls.up.isDown) {
      player.animations.play('up');
      player.body.velocity.y -= playerVelocity;
    } else if (controls.down.isDown) {
      player.animations.play('down');
      player.body.velocity.y += playerVelocity;
    } else {
      player.animations.stop();
    }
  }

  render() {
    //  Useful debug things you can turn on to see what's happening
 
    // game.debug.spriteBounds(sprite);
    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.body(sprite);
    // this.game.debug.body(player);
  }
}