import ArcadeSlopes from 'phaser-arcade-slopes';

export default class Boot extends Phaser.State {
  init() {
    this.game.input.maxPointers = 1;
    this.game.stage.disableVisibilityChange = true;
  }

  create() {
    this.game.stage.backgroundColor = '000000';
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.plugins.add(Phaser.Plugin.ArcadeSlopes);

    this.game.state.start('Preloader');
  }
}
