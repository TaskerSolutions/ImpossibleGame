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
			// New game button
			{text: "New game", click: function() {closeDialog();
				startNextLevel(1);
			}},
			// Next Level
			{text: "Next level", click: function() {closeDialog();
				startNextLevel();
			}},
			// Try again
			{text: "Try again",	click: function() {closeDialog();
				startNextLevel(currentLevel);
			}},
			// Load level 1 button
			{text: "1",	click: function() {closeDialog();
				console.log('loadGame(level);')
			}},
			// Load level 2 button
			{text: "2",	click: function() {closeDialog();
				console.log('loadGame(level);')
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
	"Any previously unlocked level can be loaded at any time.");
	$('.ui-dialog-buttonpane button:contains("New game")').button().show();
	$('.ui-dialog-buttonpane button:contains("Cancel")').button().show();
	$("#dialog").dialog("open"); 
});

// loading game - jQuery dialog box asking for confirmation
$('#load-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Load game?');
	$("#dialog-message").html("which level do you want to play?<br>");
	$('.ui-dialog-buttonpane button:contains("Cancel")').button().show();

	$('.ui-dialog-buttonpane button:contains("1")').button().show();
	$('.ui-dialog-buttonpane button:contains("2")').button().show();

	$("#dialog").dialog("open"); 
});