var character; // initialize character

// run every game tick. Used to move character & check for collisions
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

	// check for collision with enemy types & reset character to start if collided
	for (i = 0; i < bounceEnemy.length; i += 1) {
		if (character.crashWith(bounceEnemy[i])) {
			i = bounceEnemy.length;
			characterGoalPosition(currentLevel);
		}
	}	

	// check if level complete
	if (character.crashWith(goal)) {
		completeLevel();
	}

	// update char position and print to canvas
    character.newPos();    
    character.update();
}