// Create level components
function level5() {
	newCharacter(3, 3, "red");
	newGoal(1, 14, 3, 5);
	
	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	for (b = 6; b < 14; b++) {newWallRow(b, 1, 23);};

	// create enemies as per level (x location, Y location, X speed, Y speed)
	//for (b = 1; b < 29; b++) {newBombEnemy(b, 1);};
	//for (b = 1; b < 5; b++) {newBombEnemy(1, b);};
	//for (b = 1; b < 25; b++) {newBombEnemy(b, 5);};
	//for (b = 6; b < 15; b++) {newBombEnemy(24, b);};
	//for (b = 2; b < 19; b++) {newBombEnemy(28, b);};
	//for (b = 4; b < 24; b++) {newBombEnemy(b, 14);};
	//for (b = 4; b < 28; b++) {newBombEnemy(b, 18);};
	
	newBounceEnemy(26, 13, 1, 0);
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};


	//(x position, y position, radius, type, width, height)
	newCircleEnemy(9, 3, 10, "black_dot", 11);
}