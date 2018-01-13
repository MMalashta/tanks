export default class Boot {
  init() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
  }

  create() {
    this.state.start('Preloader');
  }
}
