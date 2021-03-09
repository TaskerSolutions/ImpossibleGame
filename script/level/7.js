// Create level components
function level7() {
	newCharacter(2, 10, "red");
	newGoal(27, 1, 2, 18);
	
	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	//for (b = 1; b < 14; b++) {newWallRow(b, 6, 23);};

	// create enemies as per level (x location, Y location, X speed, Y speed)
	//newBombEnemy(3, 9);
	//newBounceEnemy(26, 13, 1, 0);
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};

	for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, 1);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}