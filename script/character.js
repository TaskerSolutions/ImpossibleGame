var character; // initialize character
var characterDead = false;

// remake character
function newCharacter(x, y, color) {
	character = new rectangle(spacing, spacing, color, x * position, y * position);
}

// run every game tick. Used to move character
function updateCharacter() {
	character.speedX = 0;
    character.speedY = 0; 
	// move left trigger
    if (gameArea.keys && gameArea.keys[37]) {
		// check for collision with walls
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashLeft(walls[i])) {
				i = walls.length;
				character.speedX = 0;
			} else {
				character.speedX = -1 * speed;
			}
		}		
	}
	// move right trigger
    if (gameArea.keys && gameArea.keys[39]) {
		// check for collision with walls
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashRight(walls[i])) {
				i = walls.length;
				character.speedX = 0;
			} else {
				character.speedX = 1 * speed;
			}
		}	
	}
	// move up trigger
    if (gameArea.keys && gameArea.keys[38]) {
		// check for collision with walls
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashTop(walls[i])) {
				i = walls.length;
				character.speedY = 0;
			} else {
				character.speedY = -1 * speed;
			}
		}	
	}
	// move down trigger
    if (gameArea.keys && gameArea.keys[40]) {
		// check for collision with walls
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashBottom(walls[i])) {
				i = walls.length;
				character.speedY = 0;
			} else {
				character.speedY = 1 * speed;
			}
		}	
	}

	// update char position and print to canvas
	if (!characterDead) {character.newPos();};
    character.update();
}