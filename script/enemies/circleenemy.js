var circleEnemy = []; // array of centre enemy locations as per level
var rotationAmount = 10;
//var angle = 0;

// DRAWING A CIRCLE IS EXTREMELY INTENSIVE ON THE BROWSER.
// CANNOT BE PRINTED EVERY FRAME OR BROWSER WILL SLOW TO A CRAWL

// centre of rotating enemy (x position, y position, radius, type, speedX, speedY)
function newCircleEnemy(x, y, radius, type, fromCentre) {
	circleEnemy.push(new circle(x * position, y * position, radius, type, fromCentre));
}

// update center enemies once per frame
function updateCircle() {
	// run loop of 0 - 360 degrees of rotation in incriments each frame
	if (rotationAmount < 360) {
		rotationAmount += 10;
		//console.log(rotationAmount);
	} else {
		rotationAmount = 10;
	}

	
	
	for (i = 0; i < circleEnemy.length; i += 1) {

		//angle += Math.acos(1-Math.pow(3/circleEnemy[i].radius,2) / 2)
		//console.log(angle);
		
		//circleEnemy[i].x = circleEnemy[i].x + Math.cos(angle) * circleEnemy[i].radius;
		//circleEnemy[i].y = circleEnemy[i].y + Math.sin(angle) * circleEnemy[i].radius;

		circleEnemy[i].update();

		//circleEnemy[i].rotatePos(rotationAmount);
	}
}