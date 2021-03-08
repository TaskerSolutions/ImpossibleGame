// multiple components can be created and used for different purposes
function circle(x, y, radius, type, fromCentre, speedX, speedY) {
    this.gamearea = gameArea;   
    this.x = x;
    this.y = y;
	this.centerX = x;
    this.centerY = y;
	this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY; 
	this.fromCentre = fromCentre;
	this.angle =  rotationAmount * (Math.PI / 180);
	//this.velocity = Math.PI/2;

	// drawing a circle uses way too much memory to be printed every frame. must use pictures
    this.update = function() {
		if (type == "point") {
			gameArea.context.drawImage(images["point"], this.x, this.y, radius * 2, radius * 2);
		} else {
			//this.angle -= this.velocity;
			this.angle = rotationAmount * (Math.PI / 180);
			//console.log(this.angle);

			//var x2 = this.centerX + (this.x - this.centerX) * Math.cos(this.angle) - (this.y-this.centerY) * Math.sin(this.angle);
			//var y2 = this.centerY + (this.x - this.centerX) * Math.sin(this.angle) + (this.y-this.centerY) * Math.cos(this.angle);
			
			var x2 = this.x + this.radius * 2 * Math.sin(this.angle);
			var y2 = this.y + this.radius * 2 * Math.cos(this.angle);

			//console.log("center x = " + this.centerX);
			//console.log("center y = " + this.centerY);
			//console.log(x2);

			this.x = x2;
			this.y = y2;
			gameArea.context.drawImage(images["black_dot"], this.x, this.y, radius * 2, radius * 2);
		}
    }

	// for moving cirlce horizontal/vertical
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }

	//for rotating cirlcle around a centrepoint
	this.rotatePos = function() {
		// save canvas
		gameArea.context.save();
		// translate? idk
		gameArea.context.translate(this.x + this.radius, this.y + this.radius);
		// 180 is the speed of rotation. higher number makes it slower
		gameArea.context.rotate(Math.PI / (180 / rotationAmount));
		// - radius for both values places the image where circles position is
		gameArea.context.drawImage(images["black_dot"], - radius, - radius);
		// restore canvas
		gameArea.context.restore();
	}
}