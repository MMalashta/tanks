export default class Player {
  constructor(game) {
    this.game = game;
    this.controls = this.game.input.keyboard.createCursorKeys();
    this.sprite = this.game.add.sprite(135, 448, 'tanks');
    this.velocity = 40;
  }

  init() {
    const { game, sprite, velocity } = this;

    game.physics.enable(sprite);
    game.slopes.enable(sprite);
    sprite.body.collideWorldBounds = true;
    sprite.animations.add('left', [2,3], 10, true);
    sprite.animations.add('right', [6,7], 10, true);
    sprite.animations.add('up', [0,1], 10, true);
    sprite.animations.add('down', [4,5], 10, true);
  }

  update() {
    const { controls, sprite, velocity } = this;

    sprite.body.velocity = {
      x: 0,
      y: 0,
    }

    if (controls.left.isDown) {
      sprite.animations.play('left');
      sprite.body.velocity.x -= velocity;
    } else if (controls.right.isDown) {
      sprite.animations.play('right');
      sprite.body.velocity.x += velocity;
    } else if (controls.up.isDown) {
      sprite.animations.play('up');
      sprite.body.velocity.y -= velocity;
    } else if (controls.down.isDown) {
      sprite.animations.play('down');
      sprite.body.velocity.y += velocity;
    } else {
      sprite.animations.stop();
    }
  }
}