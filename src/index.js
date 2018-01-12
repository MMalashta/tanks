import 'pixi';
import 'p2';
import 'phaser';
import Boot from './Boot';
import Level1 from './Level1';

const game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('Boot', Boot);
//game.state.add('Preloader', Game.Preloader);
//game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', Level1);

game.state.start('Boot');