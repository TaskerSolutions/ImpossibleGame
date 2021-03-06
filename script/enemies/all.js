// run when character hits an enemy. Position is the position in enemy array
function hitEnemy(position) {
	var x = character.x;
	var y = character.y;
	characterDead = true;
	// death animation
	var i = 1;
	while (i < 20) {
		(function (i) {
		  	setTimeout(function () {
				character = new component(spacing - i, spacing - i, "darkred", x + i/2, y + i/2);
		    }, 20*i);
		})(i);
		i += 1;;
	};
	setTimeout(function() {
		startNextLevel(currentLevel);
		characterDead = false;
	}, 420)
}