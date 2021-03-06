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
			// Load level buttons
			{text: "1",	click: function() {closeDialog(); loadLevel(1);}},
			{text: "2",	click: function() {closeDialog(); loadLevel(2);}},
			{text: "3",	click: function() {closeDialog(); loadLevel(3);}},
			{text: "4",	click: function() {closeDialog(); loadLevel(4);}},
			{text: "5",	click: function() {closeDialog(); loadLevel(5);}},
			{text: "6",	click: function() {closeDialog(); loadLevel(6);}},
			{text: "7",	click: function() {closeDialog(); loadLevel(7);}},
			{text: "8",	click: function() {closeDialog(); loadLevel(8);}},
			{text: "9",	click: function() {closeDialog(); loadLevel(9);}},
			{text: "10", click: function() {closeDialog(); loadLevel(10);}},
			{text: "11", click: function() {closeDialog(); loadLevel(11);}},
			{text: "12", click: function() {closeDialog(); loadLevel(12);}},
			{text: "13", click: function() {closeDialog(); loadLevel(13);}},
			{text: "14", click: function() {closeDialog(); loadLevel(14);}},
			{text: "15", click: function() {closeDialog(); loadLevel(15);}},
			{text: "16", click: function() {closeDialog(); loadLevel(16);}},
			{text: "17", click: function() {closeDialog(); loadLevel(17);}},
			{text: "18", click: function() {closeDialog(); loadLevel(18);}},
			{text: "19", click: function() {closeDialog(); loadLevel(19);}},
			{text: "20", click: function() {closeDialog(); loadLevel(20);}},
			{text: "21", click: function() {closeDialog(); loadLevel(21);}},
			{text: "22", click: function() {closeDialog(); loadLevel(22);}},
			{text: "23", click: function() {closeDialog(); loadLevel(23);}},
			{text: "24", click: function() {closeDialog(); loadLevel(24);}},
			{text: "25", click: function() {closeDialog(); loadLevel(25);}},
			{text: "26", click: function() {closeDialog(); loadLevel(26);}},
			{text: "27", click: function() {closeDialog(); loadLevel(27);}},
			{text: "28", click: function() {closeDialog(); loadLevel(28);}},
			{text: "29", click: function() {closeDialog(); loadLevel(29);}},
			{text: "30", click: function() {closeDialog(); loadLevel(30);}},
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
	startNextLevel(currentLevel);
});

// loading game - jQuery dialog box asking for confirmation
$('#load-btn').on('click', function(){
	$("#dialog").dialog('option', 'title', 'Load Level');
	$("#dialog-message").hide();
	// define specific width and non resizable
	$('#dialog').dialog('option','width', 440);
	$('#dialog').dialog('option','resizable', 'false');
	// show level buttons
	$('.ui-dialog-buttonpane button:contains("1")').button().show();
	$('.ui-dialog-buttonpane button:contains("2")').button().show();
	$('.ui-dialog-buttonpane button:contains("3")').button().show();
	$('.ui-dialog-buttonpane button:contains("4")').button().show();
	$('.ui-dialog-buttonpane button:contains("5")').button().show();
	$('.ui-dialog-buttonpane button:contains("6")').button().show();
	$('.ui-dialog-buttonpane button:contains("7")').button().show();
	$('.ui-dialog-buttonpane button:contains("8")').button().show();
	$('.ui-dialog-buttonpane button:contains("9")').button().show();
	// turn levels that are not unlocked red
	for (i = 0; i < 31; i++) {
		x = ".ui-dialog-buttonpane button:nth-child(".concat(i).concat(")");
		if (bestTimes[i] == null) {
			$(x).css("background-color", "darkred");
			$(x).css("cursor", "default");
			$(x).css("transform", "none");
		} else {
			$(x).css("background-color", "darkgreen");
		}		
	};
	$(".ui-dialog-buttonpane button:nth-child(".concat(currentLevel).concat(")")).css("background-color", "#059700");
	$('.ui-dialog-buttonpane button:contains("Cancel")').button().show();
	$("#dialog").dialog("open"); 
});