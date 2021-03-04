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
			{text: "Close",
				click: function() {
					$(this).dialog("close");
					$('.ui-dialog-buttonpane button').button().hide();
				}
			},
			// New game button
			{text: "New game",
				click: function() {
					$(this).dialog("close");
					$('.ui-dialog-buttonpane button').button().hide();
					gameArea.stop();
					startNextLevel(1);
				}
			},
			// Load game button
			{text: "Load game",
				click: function() {
					$(this).dialog("close");
					$('.ui-dialog-buttonpane button').button().hide();
					//loadGame();
				}
			},
			// Next Level
			{text: "Next level",
				click: function() {
					$(this).dialog("close");
					$('.ui-dialog-buttonpane button').button().hide();
					startNextLevel();
				}
			}
		]
	});
});

// jQuery dialog box asking for confirmation of starting new game
$('#new-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Start new game?');
	$("#dialog-message").html("Are you sure you want to start a new game?<br>" +
	"Your current game will be saved and can be played by pressing the load game button.");
	$('.ui-dialog-buttonpane button:contains("New game")').button().show();
	$('.ui-dialog-buttonpane button:contains("Close")').button().show();
	$("#dialog").dialog("open"); 
});

// jQuery dialog box asking for confirmation of loading game
$('#load-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Load game?');
	$("#dialog-message").html("Are you sure you want to load your saved game?<br>" +
	"Your current progress will be lost if saved game is more progressed.");
	$('.ui-dialog-buttonpane button:contains("Load game")').button().show();
	$('.ui-dialog-buttonpane button:contains("Close")').button().show();
	$("#dialog").dialog("open"); 
});