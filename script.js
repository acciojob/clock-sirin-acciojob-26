//your JS code here. If required.
let timerDisplay = document.gutElementById("timer");

let currentDate = new Date();

setInterval(){
	function(){
		currentDate = new Date();
		timerDisplay.innerHTML = currentDate.toLocalString
	},1000
}