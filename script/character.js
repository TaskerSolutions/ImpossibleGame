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
		if (!collisionLeft(walls) && !collisionLeft(barrier)) {
			character.speedX = -1 * speed;
		}	
	}
	// move right trigger
    if (gameArea.keys && gameArea.keys[39]) {
		if (!collisionRight(walls) && !collisionRight(barrier)) {
			character.speedX = 1 * speed;
		}
	}
	// move up trigger
    if (gameArea.keys && gameArea.keys[38]) {
		if (!collisionTop(walls) && !collisionTop(barrier)) {
			character.speedY = -1 * speed;
		}
	}
	// move down trigger
    if (gameArea.keys && gameArea.keys[40]) {
		if (!collisionBottom(walls) && !collisionBottom(barrier)) {
			character.speedY = 1 * speed;
		}
	}

	// update char position and print to canvas
	if (!characterDead) {character.newPos();};
    character.update();
}

// check for collision with walls/barriers
function collisionBottom(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashBottom(type[i])) {
			return true;
		}
	}	
}

// check for collision with walls/barriers
function collisionTop(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashTop(type[i])) {
			return true;
		}
	}	
}

// check for collision with walls/barriers
function collisionLeft(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashLeft(type[i])) {
			return true;
		}
	}	
}

// check for collision with walls/barriers
function collisionRight(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashRight(type[i])) {
			return true;
		}
	}	
}