const questionEl = document.getElementById("question");
const answerForm = document.getElementById("answer-form");
let currentQuestion = null;

function displayQuestion(data) {
    currentQuestion = data;
    questionEl.textContent = data.question;
    const answerInputs = answerForm.querySelectorAll("input[type='radio']");
    answerInputs.forEach((input, index) => {
        if (index < data.answers.length) {
            input.value = data.answers[index];
            input.nextElementSibling.textContent = data.answers[index];
            input.parentElement.style.display = 'block';
        } else {
            input.parentElement.style.display = 'none';
        }
    });
}

function fetchQuestion() {
    fetch("/generate-question")
        .then(response => response.json())
        .then(data => displayQuestion(data))
        .catch(error => console.error("Error fetching question:", error));
}

answerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (selectedAnswer && currentQuestion) {
        const isCorrect = parseInt(selectedAnswer.value) === currentQuestion.correct_answer;
        alert(`You answered: ${selectedAnswer.value}. ${isCorrect ? "Correct!" : "Incorrect. The correct answer was " + currentQuestion.correct_answer}`);
        fetchQuestion(); // Fetch a new question after submitting
    } else {
        alert("Please select an answer!");
    }
});

fetchQuestion(); // Fetch question on page load