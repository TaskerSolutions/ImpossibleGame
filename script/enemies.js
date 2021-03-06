var bombEnemy = []; // array of bomb enemy locations as per level
var bombSize = 18;
var bounceEnemy = []; // array of bouncing enemy locations as per level
var bounceSize = 18;

// stationary enemy  (x location, Y location)
function newBombEnemy(x, y) {
	bombEnemy.push(new component(bombSize, bombSize, "bomb", x * position + 1, y * position + 1));
}

// enemy that bounces off walls (x location, Y location, X speed, Y speed)
function newBounceEnemy(x, y, speedX, speedY) {
	bounceEnemy.push(new component(bounceSize, bounceSize, "blue", x * position + 1, y * position + 1, speedX * speed, speedY * speed));
}

// run when character hits an enemy. Position is the position in enemy array
function explodeBomb(position) {
	//move character off screen to give illusion of death
	character.x = -100;
	character.y = -100; 
	// store positions of x & y coordinates
	var x = bombEnemy[position].x
	var y = bombEnemy[position].y
	var i = 1;
	while (i < 7) {
		(function (i) {
		  	setTimeout(function () {
				var explosion = "explosion".concat(i.toString());
				bombEnemy[position] = new component(bombSize, bombSize, explosion, x, y);
		    }, 50*i);
		})(i);
		i ++;;
	};
	setTimeout(function() {
		bombEnemy[position] = new component(bombSize, bombSize, "bomb", x, y);
		startNextLevel(currentLevel);
	}, 800)
}

// run when character hits an enemy. Position is the position in enemy array
function hitEnemy(position) {
	var x = character.x;
	var y = character.y;
	characterDead = true;
	// death animation
	var i = 1;
	while (i < 20) {
		(function (i) {
		  	setTimeout(function () {
				character = new component(spacing - i, spacing - i, "darkred", x + i/2, y + i/2);
		    }, 20*i);
		})(i);
		i += 1;;
	};
	setTimeout(function() {
		startNextLevel(currentLevel);
		characterDead = false;
	}, 420)
}

// create the enemies for a level. only run once per level, printing of the walls is run every game tick
function createEnemies(level) {
	// reset all enemy arrays
	bounceEnemy = [];
	bombEnemy = [];

	// create enemies as per level (x location, Y location, X speed, Y speed)
	// between 1 and 28 on X axis. between 1 and 18 on Y axis
	if (level == 1) {
		//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};
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
	} else if (level == 4) {
		newBombEnemy(3, 9);
		newBombEnemy(3, 12);
		newBombEnemy(3, 16);
		newBounceEnemy(3, 8, 1, 0);
		newBounceEnemy(3, 10, -1, 0);
		newBounceEnemy(3, 13, 1, 0);

		newBounceEnemy(3, 14, -1, 0);
		newBounceEnemy(3, 15, 1, 0);
		newBounceEnemy(3, 17, -1, 0);
		newBounceEnemy(3, 18, 1, 0);
		
		newBombEnemy(11, 16);

		newBounceEnemy(13, 17, 0, 1);
		newBounceEnemy(16, 17, 0, -1);

		newBombEnemy(18, 16);
		
		newBounceEnemy(26, 14, -1, 0);
		newBounceEnemy(26, 15, 1, 0);
		newBounceEnemy(26, 17, -1, 0);
		newBounceEnemy(26, 18, 1, 0);

		newBombEnemy(26, 9);
		newBombEnemy(26, 12);
		newBombEnemy(26, 16);
		newBounceEnemy(26, 8, 1, 0);
		newBounceEnemy(26, 10, -1, 0);
		newBounceEnemy(26, 13, 1, 0);
	} else if (level == 5) {
		
	} else if (level == 6) {
		
	} else if (level == 7) {
		
	} else if (level == 8) {
		
	} else if (level == 9) {
		
	} else if (level == 10) {
		
	} else if (level == 11) {
		
	} else if (level == 12) {
		
	} else if (level == 13) {
		
	} else if (level == 14) {
		
	} else if (level == 15) {
		
	} else if (level == 16) {
		
	} else if (level == 17) {
		
	} else if (level == 18) {
		
	} else if (level == 19) {
		
	} else if (level == 20) {
		
	} else if (level == 21) {
		
	} else if (level == 22) {
		
	} else if (level == 23) {
		
	} else if (level == 24) {
		
	} else if (level == 25) {
		
	} else if (level == 26) {
		
	} else if (level == 27) {
		
	} else if (level == 28) {
		
	} else if (level == 29) {
		
	} else if (level == 30) {
		
	}
}

// run every game tick. Used to move character & check for collisions
function updateEnemies() {
	// update bomb enemies
	for (i = 0; i < bombEnemy.length; i += 1) {		
		bombEnemy[i].update();
	}
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