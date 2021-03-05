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
			{text: "Close",	click: function() {closeDialog();}},
			// New game button
			{text: "New game", click: function() {closeDialog();
				startNextLevel(1);
			}},
			// Load game button
			{text: "Load game",	click: function() {closeDialog();
				//loadGame();
			}},
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
	startNextLevel(currentLevel);
});

// new game - jQuery dialog box asking for confirmation 
$('#new-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Start new game?');
	$("#dialog-message").html("Are you sure you want to start a new game?<br>" +
	"Your current level progress can be loaded at any time.");
	$('.ui-dialog-buttonpane button:contains("New game")').button().show();
	$('.ui-dialog-buttonpane button:contains("Close")').button().show();
	$("#dialog").dialog("open"); 
});

// loading game - jQuery dialog box asking for confirmation
$('#load-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Load game?');
	$("#dialog-message").html("Are you sure you want to load your saved game?<br>" +
	"Your current progress will be lost if saved game is more progressed.");
	$('.ui-dialog-buttonpane button:contains("Load game")').button().show();
	$('.ui-dialog-buttonpane button:contains("Close")').button().show();
	$("#dialog").dialog("open"); 
});