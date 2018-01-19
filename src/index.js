import 'pixi';
import 'p2';
import 'phaser';
import Boot from './Boot';
import Level1 from './Level1';
import Preloader from './Preloader'

class Game extends Phaser.Game {
  constructor() {
    super(480, 480, Phaser.AUTO);

		this.state.add('Boot', Boot);
		this.state.add('Preloader', Preloader);
		//this.state.add('MainMenu', Game.MainMenu);
		this.state.add('Level1', Level1);

		this.state.start('Boot');
	}

}

new Game();