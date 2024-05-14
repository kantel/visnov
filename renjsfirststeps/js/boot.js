const RenJSConfig =  {
  'name': 'Alice und RenJS',
  'w': 800,
  'h': 450,
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
    'background': 'assets/gui/loaderloaderbackground.png',
    'loadingBar': {
      'asset': 'assets/gui/loaderloading-bar.png',
      'position': {
        'x': 109,
        'y': 358
      },
      'size': {
        'w': 578,
        'h': 82
      }
    }
  },
  'fonts': 'assets/gui/fonts.css',
  'guiConfig': 'story/GUI.yaml',
  storyConfig: 'story/Config.yaml',
  storySetup: 'story/Setup.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'logChoices': true,
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
