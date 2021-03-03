// define variables
var c = document.getElementById("game");
var ctx = c.getContext("2d");
ctx.canvas.width  = 600;
ctx.canvas.height = 400;
var frameRate = 10; //frame rate of game in ms
var squareSize = 20; // size of character, walls etc.
var speed = 2; // speed at which character moves
let dx = 0; // Horizontal velocity of character - direction (x)
let dy = 0; // Vertical velocity of character - direction (y)
var deathBy = "nothing";

var images = {};
var totalResources = 0;
var numResourcesLoaded = 0;

//load images
function loadImage(name) {
	images[name] = new Image();
	images[name].onload = function() {resourceLoaded()}
	images[name].src = "media/" + name + ".png";
}

totalResources ++; loadImage("header");
totalResources ++; loadImage("point");
totalResources ++; loadImage("wall");
totalResources ++; loadImage("black_dot");

// initialise canvas when all resources are loaded
function resourceLoaded() {
	numResourcesLoaded += 1;
	if(numResourcesLoaded === totalResources) {
		ctx.drawImage(images["header"], 100, 80);
	}
}

function newGame() {
	resetScore();
	redraw();
	// start game
	main();
}

// main function
function main() {
	//check if game is over
	if (isGameOver()) {
		gameInProgress = false;
		gameOver();
		return; // stop main function
	}
	
	// run each game tick at (framerate) ms apart
	setTimeout(function onTick() {
		redraw();
		//repeat function
		main();
	}, frameRate)
}


// clear and redraw canvas background
function redraw() {
	ctx.clearRect(0, 0, c.width, c.height);
	// draw here
	drawCharacter();
}

function drawCharacter() {
	ctx.fillStyle = 'red';
	ctx.fillRect(100, 100, squareSize, squareSize)
}

function isGameOver() {
	//check if character touches enemy
	//const hitEnemy = character.x < 0;
	//if (hitEnemy) {deathBy = "enemy"};
	//return hitEnemy; // return true value
}

function gameOver() {
	if (score > highscore) {
		updateHighscore();
	} else {
		// jQuery dialog box with how you died, and score + high score
		$("#dialog").dialog('option', 'title', 'Game Over');
		$("#dialog-message").html("<br>Your score: " + score + "<br><br>High score: " + highscore +
		"<br><br>You died by crashing into " + deathBy);
		$("#dialog").dialog("open"); 
	}
}