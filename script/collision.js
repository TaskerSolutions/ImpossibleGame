// run to check for character collisions
function checkCollisions() {
	// check for collision with enemy types & execute function depening on what is hit
	if (collisionWithRect(bombEnemy) && !characterDead) {explodeBomb(i);};
	if (collisionWithRect(bounceEnemy) && !characterDead) {hitEnemy(i);};
	//if (collisionWithRect(rotatingEnemy) && !characterDead) {hitEnemy(i);};
	if (collisionWithCircle(mineEnemy) && !characterDead) {explodeMine(i);}

	//check collision with goal and complete level
	if (character.crashWith(goal)) {completeLevel();}
}

// check collision with array of rectangle type
function collisionWithRect(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashWith(type[i])) {
			return type[i];
		}
	}	
}

// check collision with array of circle type
function collisionWithCircle(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashCircle(type[i])) {
			return type[i];
		}
	}
}