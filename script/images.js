var images = [];
var totalResources = 0;
var numResourcesLoaded = 0;

//load images
function loadImage(name) {
	images[name] = new Image();
	images[name].onload = function() {resourceLoaded()}
	images[name].src = "img/" + name + ".png";
}

totalResources ++; loadImage("header");
totalResources ++; loadImage("barrier");
totalResources ++; loadImage("key");
totalResources ++; loadImage("point");
totalResources ++; loadImage("mine");
totalResources ++; loadImage("black_dot");
totalResources ++; loadImage("bounce");
totalResources ++; loadImage("wall");
totalResources ++; loadImage("bomb");
totalResources ++; loadImage("flamethrower");
totalResources ++; loadImage("flames1");
totalResources ++; loadImage("flames2");
totalResources ++; loadImage("flames3");
totalResources ++; loadImage("flames4");
totalResources ++; loadImage("flames5");
totalResources ++; loadImage("flames6");
totalResources ++; loadImage("flames7");
totalResources ++; loadImage("char");
totalResources ++; loadImage("flamethrowerdown");
totalResources ++; loadImage("flames1down");
totalResources ++; loadImage("flames2down");
totalResources ++; loadImage("flames3down");
totalResources ++; loadImage("flames4down");
totalResources ++; loadImage("flames5down");
totalResources ++; loadImage("flames6down");
totalResources ++; loadImage("flames7down");
totalResources ++; loadImage("chardown");
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