var currentLevel = 1; // current game level

// Create level components, then start interval timer
function startNextLevel(level) {
	// reset game area
	gameArea.stop();

	// increase level by one. Or set level manually.
	if (level == null) {currentLevel += 1;}
	else {currentLevel = level;};

	// print current level in html
	$('#level').html(currentLevel);

	// retrieve best times
	retrieveBestTimes();

	// print current best time to html doc
	if (bestTimes[currentLevel] == null) {
		$('#best-time').html("none");
	} else {
		$('#best-time').html(bestTimes[currentLevel]);
	}

	// initializes components of each level
	createLevel(currentLevel);
	// start interval timer
	gameArea.start();
	// restart level timer
	timer.reset();
}

// load defined level
function loadLevel(level) {
	// check for previous level having been completed
	if (bestTimes[level - 1] != null) {
		startNextLevel(level);
	}
}

// complete level function
function completeLevel() {
	// stop interval timer (redraw)
	gameArea.stop();
	// update times & open dialog
	updateBestTime(currentLevel);
}


// each levels components are created here (only called once per level)
function createLevel(level) {
	characterGoalPosition(level);
	createWalls(level);
	createEnemies(level);
}

// remake character
function newCharacter(x, y, color) {
	character = new component(spacing, spacing, color, x * position, y * position);
}

// remake goal
function newGoal(x, y, width, height) {
	goal = new component(width * position, height * position, "green", x * position, y * position);
}

//define character and goal positions
function characterGoalPosition(level) {
	if (level == 1) {
		newCharacter(3, 4, "red");
		newGoal(24, 1, 5, 4);
	} else 	if (level == 2) {
		newCharacter(2, 10, "red");
		newGoal(26, 7, 3, 7);
	} else if (level == 3) {
		newCharacter(2, 10, "red");
		newGoal(27, 1, 2, 18);
	} else if (level == 4) {
		newCharacter(3, 4, "red");
		newGoal(24, 1, 5, 4);
	} else if (level == 5) {
		newCharacter(2, 10, "red");
		newGoal(26, 7, 3, 7);
	} else if (level == 6) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 7) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 8) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 9) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 10) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 11) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 12) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 13) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 14) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 15) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 16) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 17) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 18) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 19) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 20) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 21) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 22) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 23) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 24) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 25) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 26) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 27) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 28) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 29) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else if (level == 30) {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	} else {
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	}
}