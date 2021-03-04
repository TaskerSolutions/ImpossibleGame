function startNextLevel(level) {
	// increase level by one. each time function is run.
	currentLevel += 1;
	// or set level manually 
	if (level != null) {currentLevel = level;};
	$('#level').html(currentLevel);
	// start interval timer
	gameArea.start();
	// initializes components of each level
	createLevel(level);
}

// complete level function
function completeLevel() {
	gameArea.stop();
	// jQuery dialog box with score + level completion
	$("#dialog").dialog('option', 'title', 'Congratulations!');
	$("#dialog-message").html("Level Complete.<br><br>Your score: " + score +
	"<br><br>High score: " + highscore);
	$('.ui-dialog-buttonpane button:contains("Next level")').button().show();
	$("#dialog").dialog("open"); 
}



// run game over function to update high score & provide dialog box to try again etc.
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

// each levels components are created here (only called once per level)
// between 1 and 28 for components on X axis
// between 1 and 18 for components on Y axis
function createLevel() {
	let position = 10 * scale;
	if (currentLevel == 1) {
		character.x = 3 * position;
		character.y = 4 * position;
		goal.x = 26 * position;
		goal.y = 4 * position;
		createWalls(1);
	} else if (currentLevel == 2) {
		character.x = 10 * position;
		character.y = 10 * position;
		goal.x = 20 * position;
		goal.y = 10 * position;
		createWalls(2);
	}
}