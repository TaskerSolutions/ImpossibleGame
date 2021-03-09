var images = [];
var totalResources = 0;
var numResourcesLoaded = 0;

//load images
function loadImage(name) {
	images[name] = new Image();
	images[name].onload = function() {resourceLoaded()}
	images[name].src = "media/" + name + ".png";
}

totalResources ++; loadImage("header");
totalResources ++; loadImage("point");
totalResources ++; loadImage("black_dot");

totalResources ++; loadImage("wall");
totalResources ++; loadImage("bomb");
totalResources ++; loadImage("explosion1");
totalResources ++; loadImage("explosion2");
totalResources ++; loadImage("explosion3");
totalResources ++; loadImage("explosion4");
totalResources ++; loadImage("explosion5");
totalResources ++; loadImage("explosion6");


// initialise canvas when all resources are loaded
function resourceLoaded() {
	numResourcesLoaded += 1;
	if(numResourcesLoaded === totalResources) {
	//	ctx.drawImage(images["header"], 100, 80);
	}
}