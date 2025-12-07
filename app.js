let timeLeft = 25 * 60; // 25 minutos em segundos
let timerId = null;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId) return; // Evita múltiplos timers
    
    startBtn.textContent = "Pausar";
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft === 0) {
            clearInterval(timerId);
            timerId = null;
            alert("Tempo esgotado! Hora de descansar.");
            startBtn.textContent = "Iniciar";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    startBtn.textContent = "Continuar";
}

startBtn.addEventListener('click', () => {
    if (timerId) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', () => {
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
    startBtn.textContent = "Iniciar";
});

updateDisplay();
