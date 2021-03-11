// ready reveal in
setTimeout(function(){ 
		$('.ready').addClass('active');
}, 200);

// this initializes the dialog box using some common options
$(function() {
	$("#dialog").dialog({
		autoOpen : false,
		modal : true,
		show : "blind",
		hide : "blind",
		dialogClass: "no-close",
		buttons: [
			// Close button
			{text: "Cancel",	click: function() {closeDialog();}},
			// Next Level
			{text: "Next level", click: function() {closeDialog();
				startNextLevel();
			}},
			// Try again
			{text: "Try again",	click: function() {closeDialog();
				startNextLevel(currentLevel);
			}},
		]
	});
});

function closeDialog() {
	$('#dialog').dialog("close");
	$('.ui-dialog-buttonpane button').button().hide();
};

// restart level button
$('#restart-btn').on('click', function(){ 
	gameArea.stop();
	startNextLevel(currentLevel)
});

// restart level button
$('#load-btn').on('click', function(){ 
	gameArea.stop();
	timer.stop();
	startNextLevel(0);
});