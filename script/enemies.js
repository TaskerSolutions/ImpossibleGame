var bounceEnemy = []; // array of bouncing enemy locations as per level

// enemy that bounces off walls (x location, Y location, X speed, Y speed)
function newBounceEnemy(x, y, speedX, speedY) {
	bounceEnemy.push(new component(spacing, spacing, "blue", x * position, y * position, speedX, speedY));
}

// create the enemies for a level. only run once per level, printing of the walls is run every game tick
// between 1 and 28 on X axis. between 1 and 18 on Y axis
function createEnemies(level) {
	// reset all enemy arrays
	bounceEnemy = [];

	// create enemies as per level (x location, Y location, X speed, Y speed)
	if (level == 1) {
		newBounceEnemy(3, 10, 1, 0);
		newBounceEnemy(7, 15, 0, 1);
		newBounceEnemy(15, 2, 0, 1);
		newBounceEnemy(23, 15, 0, 1);
		newBounceEnemy(10, 6, 1, 0);
		newBounceEnemy(14, 13, 1, 0);
		newBounceEnemy(18, 6, 1, 0);
		newBounceEnemy(22, 13, 1, 0);
		newBounceEnemy(25, 10, 1, 0);
	} else if (level == 2) {
		newBounceEnemy(5, 10, 0, 1);
		newBounceEnemy(7, 10, 0, -1);
		newBounceEnemy(9, 10, 0, 1);
		newBounceEnemy(11, 10, 0, -1);
		newBounceEnemy(13, 10, 0, 1);
		newBounceEnemy(15, 10, 0, -1);
		newBounceEnemy(17, 10, 0, 1);
		newBounceEnemy(19, 10, 0, -1);
		newBounceEnemy(21, 10, 0, 1);
		newBounceEnemy(23, 10, 0, -1);
	} else if (level == 3) {
		newBounceEnemy(5, 10, 0, 1);
		newBounceEnemy(7, 10, 0, -1);
		newBounceEnemy(9, 10, 0, 1);
		newBounceEnemy(11, 10, 0, -1);
		newBounceEnemy(13, 10, 0, 1);
		newBounceEnemy(15, 10, 0, -1);
		newBounceEnemy(17, 10, 0, 1);
		newBounceEnemy(19, 10, 0, -1);
		newBounceEnemy(21, 10, 0, 1);
		newBounceEnemy(23, 10, 0, -1);

		newBounceEnemy(10, 3, 1, 0);
		newBounceEnemy(10, 7, 1, 0);
		newBounceEnemy(10, 12, 1, 0);
		newBounceEnemy(10, 16, 1, 0);
		newBounceEnemy(20, 4, -1, 0);
		newBounceEnemy(20, 8, -1, 0);
		newBounceEnemy(20, 13, -1, 0);
		newBounceEnemy(20, 17, -1, 0);
	}
}

// run every game tick. Used to move character & check for collisions
function updateEnemies() {

	// update bouncing enemies
	for (i = 0; i < bounceEnemy.length; i += 1) {
		// check for collision with a wall piece
		for (j = 0; j < walls.length; j += 1) {
			if (bounceEnemy[i].crashWith(walls[j])) {
				j = walls.length;
				// reverse direction
				if (bounceEnemy[i].speedX > 0) {bounceEnemy[i].speedX = -1 * speed;}
				else if (bounceEnemy[i].speedX < 0) {bounceEnemy[i].speedX = 1 * speed;}
				if (bounceEnemy[i].speedY > 0) {bounceEnemy[i].speedY = -1 * speed;}
				else if (bounceEnemy[i].speedY < 0) {bounceEnemy[i].speedY = 1 * speed;}
			}
		}		
		bounceEnemy[i].newPos();
		bounceEnemy[i].update();
	}

	// update --- enemies

}