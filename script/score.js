var time = 0;

// retrieve best times from local storage
var bestTimes = localStorage.getItem('bestTimesImpossibleGame');
// Parse the string back into an array so it is usable in js
bestTimes = JSON.parse(bestTimes);
// if best times is empty, define it as empty array
if (bestTimes == null) {bestTimes = [];}



function updateBestTime(level) {
	retrieveBestTimes();

	// save old best time in variable
	let oldBestTime = bestTimes[level];
	if (oldBestTime == null) {oldBestTime = "none"};

	// update new best time
	if (time < bestTimes[level] || bestTimes[level] == null || bestTimes[level] == 0) {
		bestTimes[level] = time;
	}
	
	// position 0 is a combination of best times from all levels
	totalBestTimes = 0
	for (i = 1; i < bestTimes.length; i++) {
		totalBestTimes += bestTimes[i];
	};
	bestTimes[0] = totalBestTimes;
	
	// turn array into string so it can be stored in local storage
	localStorage.setItem('bestTimesImpossibleGame', JSON.stringify(bestTimes));

	// print new best time to html doc
	$('#best-time').html(JSON.stringify(bestTimes[level]));

	if (time < bestTimes[level] || bestTimes[level] == null) {
		// jQuery dialog box with new high score message
		$("#dialog").dialog('option', 'title', 'Congratulations!');
		$("#dialog-message").html("New best time: " + time + " seconds<br><br>Previous best: " + oldBestTime);
		$('.ui-dialog-buttonpane button:contains("Try again")').button().show();
		$('.ui-dialog-buttonpane button:contains("Next level")').button().show();
		$("#dialog").dialog("open");  
	} else {
		// jQuery dialog box with score + level completion
		$("#dialog").dialog('option', 'title', 'Congratulations!');
		$("#dialog-message").html("Level Complete.<br><br>Your time: " + time +
		" seconds<br><br>Best Time: " + bestTimes[currentLevel] + " seconds");
		$('.ui-dialog-buttonpane button:contains("Next level")').button().show();
		$('.ui-dialog-buttonpane button:contains("Try again")').button().show();
		$("#dialog").dialog("open"); 
	}
}

function retrieveBestTimes() {
	// retrieve best times from local storage
	bestTimes = localStorage.getItem('bestTimesImpossibleGame');
	// Parse the string back into an array so it is usable in js
	bestTimes = JSON.parse(bestTimes);
	console.log("best times array = " + bestTimes);
}