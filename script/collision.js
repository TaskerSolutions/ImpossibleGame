// run to check for character collisions
function checkCollisions() {
	// check for collision with types & execute function depening on what is hit
	if (collisionWithRect(bombEnemy) && !characterDead) {explodeBomb(i);};
	if (collisionWithRect(bounceEnemy) && !characterDead) {hitEnemy(i);};
	if (collisionWithCircle(centreEnemy) && !characterDead) {console.log(i);}
	if (character.crashWith(goal)) {completeLevel();}
}

// check collision with array of rectangle type
function collisionWithRect(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashWith(type[i])) {
			return type[i];
		}
	}	
}

// check collision with array of circle type
function collisionWithCircle(type) {
	for (i = 0; i < type.length; i += 1) {
		if (rectCircleCrash(type[i], character)) {
			return type[i];
		}
	}
}


// return true if the rectangle and circle are colliding
function rectCircleCrash(circle, rect){
	var distX = Math.abs((circle.x + circle.radius) - rect.x-rect.width/2);
	var distY = Math.abs((circle.y + circle.radius) - rect.y-rect.height/2);

	if (distX > (rect.width/2 + circle.radius)) { return false; };
	if (distY > (rect.height/2 + circle.radius)) { return false; };

	if (distX <= (rect.w/2)) { return true; };
	if (distY <= (rect.h/2)) { return true; };

	var dx=distX-rect.width/2;
	var dy=distY-rect.height/2;
	return (dx*dx+dy*dy<=(circle.radius*circle.radius));
}