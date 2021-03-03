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
			// No button
			{text: "No",
				click: function() {
					$(this).dialog("close");
				}
			},
			// Yes button
			{text: "Yes",
				click: function() {
					newGame();
					$(this).dialog("close");
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
	$("#dialog").dialog("open"); 
});

// jQuery dialog box asking for confirmation of loading game
$('#load-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Load game?');
	$("#dialog-message").html("Are you sure you want to load your saved game?<br>" +
	"Your current progress will be lost if saved game is more progressed.");
	$("#dialog").dialog("open"); 
});