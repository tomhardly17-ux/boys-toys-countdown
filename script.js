// Boys & Toys Countdown
// Target: July 30, 2026 at 12:00 PM Eastern Daylight Time

const targetDate = new Date(2026, 6, 30, 15, 0, 0).getTime();
// Month is zero-based, so 6 = July

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
const radioMessages = [
    "Avalon Command: All operators confirmed.",
    "SkilledSnake has assumed squad leadership.",
    "HeavyontheKream has secured the refreshments.",
    "KTdefoor reports all systems green.",
    "mattismattismatt has entered the AO.",
    "Cooler inventory has been classified.",
    "Mission objective: Create legendary memories.",
    "Secondary objective: Nobody loses the truck keys.",
    "Warning: Tactical jokes detected.",
    "Extraction window remains on schedule."
];

const radioMessage = document.getElementById("radio-message");
let messageIndex = 0;

function updateRadioMessage() {
    radioMessage.textContent = `>> ${radioMessages[messageIndex]}`;
    messageIndex = (messageIndex + 1) % radioMessages.length;
    playRadioBeep();
}

updateRadioMessage();
setInterval(updateRadioMessage, 8000);
const introScreen = document.getElementById("intro-screen");
const connectionStatus = document.getElementById("connection-status");
const introOperators = document.querySelectorAll(".intro-operator");

introOperators.forEach((operator, index) => {
    setTimeout(() => {
        operator.classList.add("connected");
        connectionStatus.textContent =
            `Operator ${index + 1} of ${introOperators.length} authenticated`;
    }, 1000 + index * 700);
});

setTimeout(() => {
    connectionStatus.textContent = "Squad confirmed. Loading mission...";
}, 4000);

setTimeout(() => {
    introScreen.classList.add("intro-finished");
}, 5200);
const soundToggle = document.getElementById("sound-toggle");

var soundEnabled = false;
var audioContext;

soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;

    if (soundEnabled) {
        audioContext = audioContext || new AudioContext();
        soundToggle.textContent = "🔊 COMMS ONLINE";
        soundToggle.classList.add("sound-enabled");
        playRadioBeep();
    } else {
        soundToggle.textContent = "🔇 ENABLE COMMS";
        soundToggle.classList.remove("sound-enabled");
    }
});

function playRadioBeep() {
    if (!soundEnabled || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(720, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
        420,
        audioContext.currentTime + 0.12
    );

    volume.gain.setValueAtTime(0.08, audioContext.currentTime);
    volume.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.15
    );

    oscillator.connect(volume);
    volume.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.15);
}