const savol = [
    { question: '4 + 4', answer: 8 },
    { question: '5 + 5', answer: 10 },
    { question: '9 * 9', answer: 81 },
    { question: '2 + 2', answer: 4 },
    { question: '3 + 1 + 5', answer: 9 },
    { question: '6 * 8', answer: 48 },
    { question: '5 * 2', answer: 10 },
    { question: '54 + 26', answer: 80 },
    { question: '70 - 19', answer: 51 },
    { question: '32 * 5', answer: 160 }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = savol.length;

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    showQuestion();
    document.getElementById('resultText').textContent = ''; 
});

document.getElementById('submitAnswer').addEventListener('click', function() {
    const userAnswer = document.getElementById('answerInput').value;

    if (userAnswer === '') {
        document.getElementById('resultText').textContent = "Iltimos, javob yozing!";
        return;
    }
    
    const numericAnswer = parseInt(userAnswer);
    
    if (isNaN(numericAnswer)) {
        document.getElementById('resultText').innerHTML = "<span class='text-red-500'>Iltimos, faqat raqam kiriting!</span>";
        return;
    }

    const correctAnswer = savol[currentQuestionIndex].answer;

    if (numericAnswer === correctAnswer) {
        document.getElementById('resultText').innerHTML = "<span class='text-green-500'>To'g'ri!</span>";
        correctAnswers++;
    } else {
        document.getElementById('resultText').innerHTML = "<span class='text-red-500'>Noto'g'ri</span>, to'g'ri javob: " + correctAnswer;
    }

    document.getElementById('answerInput').value = '';
    

    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        setTimeout(showQuestion, 1000); 
    } else {
        setTimeout(function() {
            document.getElementById('questionText').textContent = `O'yin tugadi! Siz ${correctAnswers} ta to'g'ri javob berdingiz.`;
            document.getElementById('resultText').textContent = '';
            document.getElementById('startScreen').classList.remove('hidden');
            document.getElementById('gameScreen').classList.add('hidden');
            currentQuestionIndex = 0;
            correctAnswers = 0;
        }, 1000);
    }
});

function showQuestion() {
    document.getElementById('questionText').textContent = savol[currentQuestionIndex].question;
    document.getElementById('resultText').textContent = ''; 
}
