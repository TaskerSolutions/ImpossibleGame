var backgroundMusic = new sound("sound/music_arcade_electro.mp3", true);
var firstPlay = false;
var explosionSound = new sound("sound/explosion.mp3");
var squishSound = new sound("sound/squish.mp3");
var flameThrowerSound = new sound("sound/flame_thrower.mp3");
var soundEffectsOn = true;

// background music button
$('#music-btn').on('click', function(){ 
	if (backgroundMusic.sound.paused) {
		backgroundMusic.sound.play()
		$('#music-btn').html("Music On");
	} else {
		backgroundMusic.sound.pause();
		$('#music-btn').html("Music Off");
	} 
});

// background music button
$('#sound-effects-btn').on('click', function(){ 
	if (soundEffectsOn) {
		soundEffectsOn = false;
		$('#sound-effects-btn').html("Sound Effects Off");
	} else {
		soundEffectsOn = true;
		$('#sound-effects-btn').html("Sound Effects On");
	}
});

function sound(src, loop) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	if (loop) {this.sound.setAttribute("loop", "true")}
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	
	this.play = function() {
		this.sound.play();
	}
	this.pause = function() {
		this.sound.pause();
	}
	this.stop = function() {
		this.sound.pause();
		this.sound.currentTime = 0;
	}
	this.isPlaying = function() {
		return !this.paused;
	}
}