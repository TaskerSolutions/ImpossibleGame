var scale = 2; // zoom of game
var frameRate = 20; //frame rate of game in ms
var squareSize = 10; // size of character, walls etc.
var speed = 2; // speed at which character moves
var goal; // goal for each level
let spacing = squareSize * scale; // spacing for each component. default is 20px
let position = 10 * scale; // position on X/Y at which objects are drawn. (4 = 80px)

// executed when body loads successfully
function createGame() {
	gameArea.create();
	character = new component(squareSize * scale, squareSize * scale, "green", 20 * scale, 100 * scale);
	goal = new component(squareSize * scale, squareSize * scale, "#E5A001", 60 * scale, 100 * scale);
	timer.start();
	startNextLevel(1);
}

// main function stored in here (gameArea.interval)
var gameArea = {
    canvas : document.createElement("canvas"),
    create : function() {
        this.canvas.width = 300 * scale;
        this.canvas.height = 200 * scale;
        this.context = this.canvas.getContext("2d"); 
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); // where canvas appears in body
		//listen for keydown events, pass key code through (e)
        window.addEventListener('keydown', function (e) {
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[e.keyCode] = (e.type == "keydown");
			if((e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40)
				&& e.target.nodeName=='BODY') {
				event.preventDefault(); //prevent default if it is body
			}
        })
		//listen for keyup events, pass key code through (e)
        window.addEventListener('keyup', function (e) {
            gameArea.keys[e.keyCode] = (e.type == "keydown");  
			if((e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40)
				&& e.target.nodeName=='BODY') {
				event.preventDefault(); //prevent default if it is body
			}          
        })
    }, 
	// start interval that redraws canvas once every (framerate) ms
	start : function() {this.interval = setInterval(redraw, frameRate);},
	// clear function, for reseting gameArea canvas to blank
    clear : function() {this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);},
	// used to clear interval if bugs are present or game over, level complete etc.
	stop : function() {clearInterval(this.interval);}
}


// runs every game tick (frameRate)
function redraw() {
	// read timer
	time = Math.round(timer.getTime() / 10) / 100
	// print time to html
	$('#time').html(time);
	// clear canvas to blank
	gameArea.clear();
	// draw array of walls
	for (i = 0; i < walls.length; i += 1) {walls[i].update();}
	// draw goal
	goal.update();
	//draw enemies
	updateEnemies();
	// run character movement and collision detection code
	updateCharacter();
}