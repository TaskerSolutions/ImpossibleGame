var centreEnemy = []; // array of centre enemy locations as per level
var radius = 10;

// DRAWING A CIRCLE IS EXTREMELY INTENSIVE ON THE BROWSER.
// CANNOT BE PRINTED EVERY FRAME OR BROWSER WILL SLOW TO A CRAWL

// centre of rotating enemy (x position, y position, radius, type, speedX, speedY)
function newCentreEnemy(x, y, radius, speedX, speedY) {
	centreEnemy.push(new circle(x * position, y * position, 5, "black", speedX * speed, speedY * speed));
}

// update center enemies
function updateCentre() {
	for (i = 0; i < centreEnemy.length; i += 1) {
		//centerEnemy[i].newPos();
		centreEnemy[i].update();
	}
}