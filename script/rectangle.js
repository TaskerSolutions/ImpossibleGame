// multiple components can be created and used for different purposes
function rectangle(width, height, type, x, y, speedX, speedY) {
    this.gamearea = gameArea;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;    
    this.x = x;
    this.y = y;   
	
    this.update = function() {
		if (type == "wall") {
			gameArea.context.drawImage(images["wall"], this.x, this.y, spacing, spacing)
		} else if (type == "bomb") {
			gameArea.context.drawImage(images["bomb"], this.x, this.y, bombSize, bombSize)
		} else if (type == "explosion1") {
			gameArea.context.drawImage(images["explosion1"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion2") {
			gameArea.context.drawImage(images["explosion2"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion3") {
			gameArea.context.drawImage(images["explosion3"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion4") {
			gameArea.context.drawImage(images["explosion4"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion5") {
			gameArea.context.drawImage(images["explosion5"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion6") {
			gameArea.context.drawImage(images["explosion6"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "black_dot") {
			gameArea.context.drawImage(images["black_dot"], this.x, this.y, 10, 10);
		} else {
        	gameArea.context.fillStyle = type;
			gameArea.context.fillRect(this.x, this.y, this.width, this.height);
		}
    }

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }   

	this.rotatePos = function() {
		gameArea.context.save();
		gameArea.context.translate(this.x + this.width / 2, this.y + this.height / 2);
		gameArea.context.rotate(Math.PI / (180.0 / rotationAmount));
		gameArea.context.fillStyle = type;
		gameArea.context.fillRect(this.width / (20 - this.width), this.height / (20 / this.height), this.width, this.height);
		gameArea.context.restore();
	}

	// return true if the rectangle and circle are colliding
	this.crashCircle = function(circle) {
		var distX = Math.abs((circle.x + circle.radius) - this.x - this.width/2);
		var distY = Math.abs((circle.y + circle.radius) - this.y - this.height/2);

		if (distX > (this.width/2 + circle.radius)) { return false; };
		if (distY > (this.height/2 + circle.radius)) { return false; };

		if (distX <= (this.width/2)) { return true; };
		if (distY <= (this.height/2)) { return true; };

		var dx=distX-this.width/2;
		var dy=distY-this.height/2;
		return (dx*dx+dy*dy<=(circle.radius*circle.radius));
	}

	// collision detection
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
	// top of (this) collision detection with bottom of (otherobj)
	this.crashTop = function(otherobj) {
		var crashtop = false;
        if (this.y == otherobj.y + (otherobj.height) &&
			this.x < otherobj.x + (otherobj.width) &&
			this.x + (this.width) > otherobj.x) {
			crashtop = true;
		}
        return crashtop;
    }
	// bottom of (this) collision detection with top of (otherobj)
	this.crashBottom = function(otherobj) {
        var crashbottom = false;
        if (this.y + (this.height) == otherobj.y &&
			this.x < otherobj.x + (otherobj.width) &&
			this.x + (this.width) > otherobj.x) {
			crashbottom = true;
		}
        return crashbottom;
    }
	// left of (this) collision detection with right of (otherobj)
	this.crashLeft = function(otherobj) {
		var crashleft = false;
        if (this.x == otherobj.x + (otherobj.width) &&
			this.y < otherobj.y + (otherobj.height) &&
			this.y + (this.height) > otherobj.y) {
			crashleft = true;
		}
        return crashleft;
    }
	// right of (this) collision detection with left of (otherobj)
	this.crashRight = function(otherobj) {
        var crashright = false;
        if (this.x + (this.width) == otherobj.x &&
			this.y < otherobj.y + (otherobj.height) &&
			this.y + (this.height) > otherobj.y) {
			crashright = true;
		}
        return crashright;
    }
}