let controls;
let layer;
let map;
let player;
const playerVelocity = 100;

export default class Level1 {
  create() {
    this.stage.backgroundColor = '000000';

    map = this.add.tilemap('level1', 16, 16);
    map.addTilesetImage('tileset');

    layer = map.createLayer(0);
    layer.scale.set(2);

    controls = this.input.keyboard.createCursorKeys();

    player = this.add.sprite(128, 448, 'tanks');
    player.animations.add('left', [2,3], 10, true);
    player.animations.add('right', [6,7], 10, true);
    player.animations.add('up', [0,1], 10, true);
    player.animations.add('down', [4,5], 10, true);
    player.scale.set(2);
    this.physics.arcade.enable(player);
  }

  update() {
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
}