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

// create the walls for a level. only run once per level, printing of the walls is run every game tick
// between 1 and 28 on X axis.  between 1 and 18 on Y axis
function createWalls(level) {
	// clear current array
	walls = [];
	// create outer perimeter walls
	newWallRow(0, 0, 29);
	newWallRow(19, 0, 29);
	newWallColumn(0, 1, 18);
	newWallColumn(29, 1, 18);

	// (X/Y location, X/Y Start, Length)
	if (level == 1) {
		newWallColumn(7, 1, 13);
		newWallColumn(15, 6, 18);
		newWallColumn(23, 1, 13);
	} else if (level == 2) {
		newWallRow(1, 1, 28);
		newWallRow(2, 1, 28);
		newWallRow(3, 1, 28);
		newWallRow(4, 1, 28);
		newWallRow(5, 1, 28);
		newWallRow(6, 1, 28);
		newWallRow(14, 1, 28);
		newWallRow(15, 1, 28);
		newWallRow(16, 1, 28);
		newWallRow(17, 1, 28);
		newWallRow(18, 1, 28);
	} else if (level == 3) {
	}
}