// multiple components can be created and used for different purposes
function component(width, height, type, x, y) {
    this.gamearea = gameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
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

// run every game tick. Used to move character & check for collisions
function updateCharacter() {
	character.speedX = 0;
    character.speedY = 0; 
	// move left trigger and check for obsticles
    if (gameArea.keys && gameArea.keys[37]) {
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashLeft(walls[i])) {
				i = walls.length;
				character.speedX = 0;
			} else {
				character.speedX = -1 * speed;
			}
		}		
	}
	// move right trigger and check for obsticles
    if (gameArea.keys && gameArea.keys[39]) {
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashRight(walls[i])) {
				i = walls.length;
				character.speedX = 0;
			} else {
				character.speedX = 1 * speed;
			}
		}	
	}
	// move up trigger and check for obsticles
    if (gameArea.keys && gameArea.keys[38]) {
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashTop(walls[i])) {
				i = walls.length;
				character.speedY = 0;
			} else {
				character.speedY = -1 * speed;
			}
		}	
	}
	// move down trigger and check for obsticles
    if (gameArea.keys && gameArea.keys[40]) {
		for (i = 0; i < walls.length; i += 1) {
			if (character.crashBottom(walls[i])) {
				i = walls.length;
				character.speedY = 0;
			} else {
				character.speedY = 1 * speed;
			}
		}	
	}
	// update char position and print to canvas
    character.newPos();    
    character.update();
}