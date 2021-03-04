// create the walls for a level. only run once per level, printing of the walls is run every game tick
function createWalls(level) {
	let spacing = squareSize * scale;
	let position = 10 * scale;
	let width = gameArea.canvas.width;
	let height = gameArea.canvas.height;
	let currentX = 0;
	let currentY = 10 * scale;

	// clear current array
	walls = [];
	// top walls
	while (currentX < width) {
		walls.push(new component(spacing, spacing, "wall", currentX, 0));
		currentX += 10 * scale;
	}
	currentX = 0;
	// bottom walls
	while (currentX < width) {
		walls.push(new component(spacing, spacing, "wall", currentX, height - 1 * position));
		currentX += 10 * scale;
	}
	// left walls
	while (currentY < height) {
		walls.push(new component(spacing, spacing, "wall", 0, currentY));
		currentY += 10 * scale;
	}
	currentY = 10 * scale;
	// right walls
	while (currentY < height) {
		walls.push(new component(spacing, spacing, "wall", width - 1 * position, currentY));
		currentY += 10 * scale;
	}

	// between 1 and 28 for components on X axis
	// between 1 and 18 for components on Y axis
	if (level == 1) {
		//top left
		walls.push(new component(spacing, spacing, "wall", 7 * position, 1 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 2 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 3 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 4 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 5 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 6 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 7 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 8 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 9 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 10 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 11 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 12 * position));
		walls.push(new component(spacing, spacing, "wall", 7 * position, 13 * position));
		//bottom left
		walls.push(new component(spacing, spacing, "wall", 14 * position, 6 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 7 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 8 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 9 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 10 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 11 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 12 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 13 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 14 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 15 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 16 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 17 * position));
		walls.push(new component(spacing, spacing, "wall", 14 * position, 18 * position));
		//top right
		walls.push(new component(spacing, spacing, "wall", 22 * position, 1 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 2 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 3 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 4 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 5 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 6 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 7 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 8 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 9 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 10 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 11 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 12 * position));
		walls.push(new component(spacing, spacing, "wall", 22 * position, 13 * position));
	} else if (level == 2) {

	}
}