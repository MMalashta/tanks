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
    //layer.resize(512, 480);
    //layer.setScale(2);
    //layer.resize(512, 480);
    //layer.setScale(2);
    layer.debug = true;

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

    player = this.add.sprite(0, 0, 'tanks');
    //player.anchor.setTo(8, 8);
    //player.scale.set(2)
    this.physics.enable(player);
    this.game.slopes.enable(player);
    //player.body.slopes = {sat: {response: 0}}; // workaround for a phaser bug
    
    //player.body.slopes.preferY = true;
    player.body.bounce.x = 0;
    player.body.bounce.y = 0;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [2,3], 10, true);
    player.animations.add('right', [6,7], 10, true);
    player.animations.add('up', [0,1], 10, true);
    player.animations.add('down', [4,5], 10, true);
    // player.scale.x = 2;
    // player.scale.y = 2;
    //player.resize(32,32);
    //player.setScaleMinMax(1,1,2,2);
    //player.scale.setTo(2)
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
      //player.body.setSize(13,13,2,1);
    } else if (controls.right.isDown) {
      player.animations.play('right');
      player.body.velocity.x += playerVelocity;
      //player.body.setSize(13,13,1,1);
    } else if (controls.up.isDown) {
      player.animations.play('up');
      player.body.velocity.y -= playerVelocity;
      //player.body.setSize(13,13,1,2);
    } else if (controls.down.isDown) {
      player.animations.play('down');
      player.body.velocity.y += playerVelocity;
      //player.body.setSize(13,13,1,1);
    } else {
      player.animations.stop();
    }
  }

  render() {
    //  Useful debug things you can turn on to see what's happening
 
    // game.debug.spriteBounds(sprite);
    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.body(sprite);
    //this.debug.bodyInfo(player, 10, 10);
    //this.game.debug.spriteBounds(player);
    this.game.debug.body(player);
  }
}