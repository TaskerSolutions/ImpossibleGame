//listen for arrow key presses
document.addEventListener("keydown", changeDirection);

//change direction event triggered by arrow keys
function changeDirection(event) {
	const LEFT_KEY = 37;
	const RIGHT_KEY = 39;
	const UP_KEY = 38;
	const DOWN_KEY = 40; 
	const keyPressed = event.keyCode;
	const goingUp = dy === -speed;
	const goingDown = dy === speed;
	const goingRight = dx === speed;
	const goingLeft = dx === -speed; 

	if (keyPressed === LEFT_KEY) {
		event.preventDefault();
		dx = -speed;
		dy = 0;
	} 
	if (keyPressed === UP_KEY) {
		event.preventDefault();
		dx = 0;
		dy = -speed;
	} 
	if (keyPressed === RIGHT_KEY) {
		event.preventDefault();
		dx = speed;
		dy = 0;
	} 
	if (keyPressed === DOWN_KEY) {
		event.preventDefault();
		dx = 0;
		dy = speed;
	}
}