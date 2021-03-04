var images = {};
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
totalResources ++; loadImage("wall");
totalResources ++; loadImage("black_dot");

// initialise canvas when all resources are loaded
function resourceLoaded() {
	numResourcesLoaded += 1;
	if(numResourcesLoaded === totalResources) {
	//	ctx.drawImage(images["header"], 100, 80);
	}
}