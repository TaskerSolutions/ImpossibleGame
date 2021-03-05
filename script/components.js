// multiple components can be created and used for different purposes
function component(width, height, type, x, y, speedX, speedY) {
    this.gamearea = gameArea;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;    
    this.x = x;
    this.y = y;    
    this.update = function() {
		if (type == "wall") {
			gameArea.context.drawImage(images["wall"], this.x, this.y, 10 * scale, 10 * scale)
		} else {
			ctx = gameArea.context;
        	ctx.fillStyle = type;
       		ctx.fillRect(this.x, this.y, this.width, this.height);
		}
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
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