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
    "Warning: Tactical dad jokes detected.",
    "Extraction window remains on schedule."
];

const radioMessage = document.getElementById("radio-message");
let messageIndex = 0;

function updateRadioMessage() {
    radioMessage.textContent = `>> ${radioMessages[messageIndex]}`;
    messageIndex = (messageIndex + 1) % radioMessages.length;
}

updateRadioMessage();
setInterval(updateRadioMessage, 8000);