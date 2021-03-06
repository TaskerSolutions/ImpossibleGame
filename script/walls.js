var walls = []; // array of wall locations as per level

// add new wall to array
function newWall(x, y) {
	walls.push(new component(spacing, spacing, "wall", x * position, y * position));
}
// add row of walls (X location, Y Start, Length)
function newWallColumn(x, yStart, length) {
	for (i = 0 + yStart; i < length + 1; i += 1) {newWall(x, i);}
}
// add row of walls (Y location, X Start, Length)
function newWallRow(y, xStart, length) {
	for (i = 0 + xStart; i < length + 1; i += 1) {newWall(i, y);}
}

function outerWalls() {
	newWallRow(0, 0, 29);
	newWallRow(19, 0, 29);
	newWallColumn(0, 1, 18);
	newWallColumn(29, 1, 18);
}

// create the walls for a level. only run once per level, printing of the walls is run every game tick
function createWalls(level) {
	// clear current array
	walls = [];

	// (X/Y location, X/Y Start, Length)
	// between 1 and 28 on X axis.  between 1 and 18 on Y axis
	if (level == 1) {
		outerWalls();
		newWallColumn(7, 1, 13);
		newWallColumn(15, 6, 18);
		newWallColumn(23, 1, 13);
	} else if (level == 2) {
		outerWalls();
		for (b = 1; b < 7; b++) {newWallRow(b, 1, 28);};
		for (b = 14; b < 19; b++) {newWallRow(b, 1, 28);};
	} else if (level == 3) {
		outerWalls();
	} else if (level == 4) {
		outerWalls();
		for (b = 1; b < 14; b++) {newWallRow(b, 6, 23);};
	} else if (level == 5) {
		
	}
}