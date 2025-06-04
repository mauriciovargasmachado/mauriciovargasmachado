// La variable global "questions" con 250 preguntas se carga desde questions.js


//desarrollar-aplicación-de-estudio-para-examen-de-ciudadanía
// La variable global "questions" con 250 preguntas se carga desde questions.js

// Banco de preguntas de ejemplo. Puedes expandirlo con todas las preguntas de "Discover Canada".
const totalExamQuestions = 20;
let examQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

const statsDiv = document.getElementById('stats');
const questionContainer = document.getElementById('question-container');

const progressDiv = document.getElementById('progress');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const startButton = document.getElementById('start');
const resultDiv = document.getElementById('result');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadStats() {
    const attempts = parseInt(localStorage.getItem('attempts') || '0');
    const correct = parseInt(localStorage.getItem('correct') || '0');
    const wrong = parseInt(localStorage.getItem('wrong') || '0');
    statsDiv.textContent = `Intentos: ${attempts} | Aciertos: ${correct} | Errores: ${wrong}`;
}

function saveStats() {
    const attempts = parseInt(localStorage.getItem('attempts') || '0') + 1;
    const correct = parseInt(localStorage.getItem('correct') || '0') + correctCount;
    const wrong = parseInt(localStorage.getItem('wrong') || '0') + wrongCount;
    localStorage.setItem('attempts', attempts);
    localStorage.setItem('correct', correct);
    localStorage.setItem('wrong', wrong);
}

function startQuiz() {
    resultDiv.classList.add('hide');
    questionContainer.classList.remove('hide');
    startButton.parentElement.classList.add('hide');

    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;

    examQuestions = shuffle([...questions]).slice(0, totalExamQuestions);
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= examQuestions.length) {
        endQuiz();
        return;
    }

    const current = examQuestions[currentQuestionIndex];
    questionElement.textContent = current.question;

    progressDiv.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalExamQuestions}`;

    optionsElement.innerHTML = '';
    current.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(btn);
    });

    nextButton.classList.add('hide');
}

function selectAnswer(index) {
    const current = examQuestions[currentQuestionIndex];
    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === current.answer) {

            btn.classList.add('correct');
        } else if (idx === index) {
            btn.classList.add('wrong');

            btn.style.backgroundColor = '#c8e6c9';
        } else if (idx === index) {
            btn.style.backgroundColor = '#ffcdd2';

        }
    });

    if (index === current.answer) {
        correctCount++;
    } else {
        wrongCount++;
    }

    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    questionContainer.classList.add('hide');
    startButton.parentElement.classList.remove('hide');
    saveStats();
    loadStats();
    progressDiv.textContent = '';

    const pass = correctCount >= 15; // 15/20 para pasar
    resultDiv.textContent = `Tuviste ${correctCount} aciertos y ${wrongCount} errores. ${pass ? '¡Aprobaste!' : 'No aprobaste.'}`;
    resultDiv.classList.remove('hide');
}

loadStats();

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
