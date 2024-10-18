document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const resultDiv = document.getElementById('result');
    const scoreBody = document.getElementById('score-body');
    const refreshButton = document.getElementById('refresh-quiz');

    let currentQuestions = []; // Store current questions for score calculation

    // Fetch questions from an external API
    async function fetchQuestions() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            currentQuestions = data.results; // Store fetched questions
            displayQuestions(currentQuestions);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    function displayQuestions(questions) {
        // Clear previous questions
        questionsContainer.innerHTML = '';
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <h3>${index + 1}. ${decodeHtml(question.question)}</h3>
                ${createAnswerOptions(question, index)}
            `;
            questionsContainer.appendChild(questionDiv);
        });
    }

    function createAnswerOptions(question, questionIndex) {
        const options = [question.correct_answer, ...question.incorrect_answers];
        const shuffledOptions = options.sort(() => Math.random() - 0.5);
        return shuffledOptions.map(option => `
            <label class="answer-choice">
                <input type="radio" name="question-${questionIndex}" value="${option}">
                ${decodeHtml(option)}
            </label>
        `).join('');
    }

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        const username = usernameInput.value.trim();

        // Validate username
        if (!username) {
            alert('Please enter your name.');
            return;
        }

        const answers = Array.from(quizForm.elements)
            .filter(el => el.type === 'radio' && el.checked)
            .map(el => el.value);

        // Get correct answers from the stored questions
        const correctAnswers = currentQuestions.map(question => question.correct_answer);

        calculateScore(answers, correctAnswers, username);
    });

    function calculateScore(answers, correctAnswers, username) {
        let score = 0;
        let feedbackHTML = '';

        // Compare user's answers with correct answers and generate feedback
        answers.forEach((answer, index) => {
            const correctAnswer = correctAnswers[index];
            if (answer === correctAnswer) {
                score++;
                feedbackHTML += `<div class="feedback-item">Question ${index + 1}: Correct!</div>`;
            } else {
                feedbackHTML += `<div class="feedback-item">Question ${index + 1}: Wrong! The correct answer was ${correctAnswer}</div>`;
            }
        });

        resultDiv.innerHTML = `<h3>Your Score: ${score}</h3>` + feedbackHTML;
        saveScore(username, score);
    }

    function saveScore(name, score) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${score}</td>`;
        // Prepend the new score row to the score table
        scoreBody.prepend(row);
    }

    function decodeHtml(html) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = html;
        return textArea.value;
    }

    // Add event listener for the refresh button to reset the quiz
    refreshButton.addEventListener('click', () => {
        resetQuiz();
    });

    function resetQuiz() {
        // Clear the result
        resultDiv.innerHTML = '';
        // Fetch new questions
        fetchQuestions();
    }

    fetchQuestions(); // Initial fetch of questions
});

// Sparkling Cursor Effect
function spark(event) {
    let i = document.createElement('i'); // Create a new spark element
    i.style.position = 'absolute';
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.transform = `scale(${Math.random() * 2 + 1})`; // Random scale
    i.style.setProperty('--x', getRandomTransitionValue());
    i.style.setProperty('--y', getRandomTransitionValue());

    // Style for the sparkle
    i.style.width = '5px';
    i.style.height = '5px';
    i.style.background = 'radial-gradient(circle, #fff, #ff66cc, transparent)';
    i.style.borderRadius = '50%';
    i.style.boxShadow = '0 0 10px rgba(255, 102, 204, 0.8)';

    document.body.appendChild(i); // Add spark to the body

    setTimeout(() => {
        document.body.removeChild(i); // Remove spark after 2 seconds
    }, 2000);
}

// Generate random transition values for sparkle effect
function getRandomTransitionValue() {
    return `${Math.random() * 400 - 200}px`; // Random movement range
}

document.addEventListener('mousemove', spark); // Attach spark effect to mouse movement
