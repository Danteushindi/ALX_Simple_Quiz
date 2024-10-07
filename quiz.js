function checkAnswer() {
	var correctAnswer = "4";

	let checkedRadio = document.querySelector('input[name="quiz"]:checked');

	var userAnswer = checkedRadio.value;

	if (userAnswer === correctAnswer) {
		document.getElementById("feedback").innerHTML = "Correct Well done.";
	}
    
    else {
    	document.getElementById("feedback").innerHTML = "That's incorrect. Try again!";
    }
}

var submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);