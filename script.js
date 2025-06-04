const progressDiv = document.getElementById('progress');
//desarrollar-aplicación-de-estudio-para-examen-de-ciudadanía
// La variable global "questions" con 250 preguntas se carga desde questions.js

// Banco de preguntas de ejemplo. Puedes expandirlo con todas las preguntas de "Discover Canada".
const questions = [
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: 1
    },
    {
        question: "¿Quién es la jefa de Estado de Canadá?",
        options: ["El Primer Ministro", "La Reina", "El Gobernador General", "El Presidente"],
        answer: 1
    },
    {
        question: "¿Cuántas provincias tiene Canadá?",
        options: ["10", "3", "13", "5"],
        answer: 0
    },
    {
        question: "¿Cuál es el animal nacional de Canadá?",
        options: ["Castor", "Alce", "Ganso", "Caribú"],
        answer: 0
    },
    {
        question: "¿Qué representan las hojas de arce en la bandera canadiense?",
        options: ["La naturaleza", "Las provincias", "La independencia", "La corona"],
        answer: 1
    }
    // Agrega aquí el resto de preguntas del libro
];


const totalExamQuestions = 20;
let examQuestions = [];
    progressDiv.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalExamQuestions}`;
            btn.classList.add('correct');
            btn.classList.add('wrong');
    progressDiv.textContent = '';
let wrongCount = 0;

const statsDiv = document.getElementById('stats');
const questionContainer = document.getElementById('question-container');
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

    const pass = correctCount >= 15; // 15/20 para pasar
    resultDiv.textContent = `Tuviste ${correctCount} aciertos y ${wrongCount} errores. ${pass ? '¡Aprobaste!' : 'No aprobaste.'}`;
    resultDiv.classList.remove('hide');
}

loadStats();

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
