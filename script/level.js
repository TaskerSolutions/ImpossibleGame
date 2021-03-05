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
	$('#best-time').html(bestTimes[currentLevel]);

	// initializes components of each level
	createLevel(currentLevel);
	// start interval timer
	gameArea.start();
	// restart level timer
	timer.reset();
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

//define character and goal positions
function characterGoalPosition(level) {
	if (level == 1) {
		character.x = 3 * position;
		character.y = 4 * position;
		goal.x = 26 * position;
		goal.y = 4 * position;
	} else 	if (level == 2) {
		character.x = 2 * position;
		character.y = 10 * position;
		goal.x = 27 * position;
		goal.y = 10 * position;
	} else if (level == 3) {
		character.x = 2 * position;
		character.y = 10 * position;
		goal.x = 27 * position;
		goal.y = 10 * position;
	}
}