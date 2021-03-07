// multiple components can be created and used for different purposes
function circle(x, y, radius, type, speedX, speedY) {
    this.gamearea = gameArea;   
    this.x = x;
    this.y = y;
	this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;  
    this.update = function() {
		if (type == "wall") {
			// do 
		} else if (type == "bomb") {
			// gameArea.context.drawImage(images["bomb"], this.x, this.y, bombSize, bombSize)
		} else {
			// draw circle
			ctx = gameArea.context;
			ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
			ctx.fillStyle = type;
       		ctx.fill();
		}
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    };
}