/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"zauberwald": "zauberwald23.jpg"

});


// Define the Characters
monogatari.characters ({
	"hatter": {
		name: "Mad Hatter",
		color: '#5bcaff',
		sprites: {normal: "madhatter.png"}
	}
});	

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene zauberwald with fadein',
		"show character hatter normal at right with fadein",
			'hatter Hallo {{p.name}}, Willkommen in meinem Zauberwald!',
		{
			'Choice': {
				'Dialog': 'hatter Hast Du Dich schon durch die Dokumentation gewühlt?',
				'Yes': {
					'Text': 'Ja, ich war schon so neugierig!',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Nein, ich hatte bisher noch keine Zeit gefunden!',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'hatter Großartig!',
		'hatter Dann bist Du ja bereit, ein grandioses Spiel zu erstellen!',
		'hatter Ich kann es kaum erwarten, dies zu sehen!',
		'jump End'
	],

	'No': [

		'hatter Dann wühle Dich jetzt dadurch.',

		'show message Help',

		'hatter Auf, auf, erstelle nun ein grandioses Spiel!',
		'hatter Ich kann es kaum erwarten, dies zu sehen!',
		'jump End'
	],

	"End": [
		"hatter Das ist der Beginn einer wunderbaren Freundschaft."
	]
});