// BOYS & TOYS COUNTDOWN
// July 30, 2026 at 3:00 PM Eastern Daylight Time

const targetDate = new Date("2026-07-30T15:00:00-04:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// CONNECTING SCREEN

const introScreen = document.getElementById("intro-screen");
const missionScreen = document.getElementById("mission-screen");
const introOperators = document.querySelectorAll(
    ".intro-operators div"
);

introOperators.forEach(function (operator, index) {
    setTimeout(function () {
        operator.classList.add("connected");
    }, 700 + index * 650);
});

setTimeout(function () {
    introScreen.classList.add("intro-finished");
    missionScreen.classList.add("mission-visible");
}, 3900);


// RADIO CHATTER

const radioMessages = [
    "Command: Avalon perimeter secure.",
    "Welcome back, SkilledSnake.",
    "GirthQuake has entered the AO.",
    "GirthQuake reports maximum tactical readiness.",
    "Is that a gold gawker in your hand?",
    "SkilledSnake has assumed squad leadership.",
    "HeavyontheKream has secured the refreshments.",
    "KTdefoor reports all systems green.",
    "mattismattismatt has entered the AO.",
    "Mission objective: Make legendary memories.",
    "Can i get a, gotcha bitch?",
    "Where are we landing, Matt?",
    "We going for specialist?",
    "Secondary objective: Piggly Wiggly if necessary.",
    "Pizza supply confirmed. Morale is high.",
    "Cooler status confirmed. Proceed with operation.",
    "Avalon Command has cleared your squad.",
    "Operation Bombaclaatt is a go. Proceed with caution.",
    "Command advises SkilledSnake that confidence is not a substitute for a plan.",
    "SkilledSnake has volunteered the squad for something nobody approved.",
    "SkilledSnake is currently explaining why that technically counted as a win.",
    "SkilledSnake has marked a location approximately nowhere near the objective.",

    "HeavyontheKream has stolen another orangey and declared it mission essential.",
    "HeavyontheKream reports the beverage situation is stable but classified.",
    "Command has denied HeavyontheKream's request for a more tequila.",
    "HeavyontheKream is a bottom..........of the tower card getter.",

    "KTdefoor has blamed the latest incident on server latency.",
    "KTdefoor is requesting everyone stop talking so he can continue talking.",
    "KTdefoor has confirmed he was absolutely about to do that.",
    "KTdefoor reports the plan made more sense before everyone followed it.",
    "mattismattismatt has disconnected emotionally but remains online.",
    "mattismattismatt has returned from an unexplained tactical absence.",
    "Command is still waiting for mattismattismatt to acknowledge the briefing.",
    "mattismattismatt reports everything is under control, which concerns Command.",

"GirthQuake has entered the AO. Good Luck.",
"GirthQuake has requested additional room in the deployment vehicle.",
"GirthQuake reports maximum width and minimum concern.",

"Avalon Command has lowered expectations to achievable levels.",
"The squad has passed the readiness check but failed the maturity check.",
"Command reminds all operators that bad decisions still require teamwork.",
"Weekend intelligence has been reviewed and immediately classified.",
"All five operators are online. Productivity is no longer expected.",
"Mission status updated: Nobody appears to know what is happening.",
"Command has received several complaints and chosen to ignore all of them.",
"The squad's tactical budget has been redirected to snacks.",
"Intelligence confirms the group chat cannot be used as legal evidence.",
"Final objective: Survive long enough to schedule next year's mission.",
    "All operators accounted for. Stand by for deployment."
];

const radioMessageElement =
    document.getElementById("radio-message");

let previousMessageIndex = -1;
let commsEnabled = false;

function chooseRadioMessage() {
    let messageIndex;

    do {
        messageIndex = Math.floor(
            Math.random() * radioMessages.length
        );
    } while (
        messageIndex === previousMessageIndex &&
        radioMessages.length > 1
    );

    previousMessageIndex = messageIndex;

    const message = radioMessages[messageIndex];

    radioMessageElement.textContent = ">> " + message;

    if (commsEnabled) {
        speakRadioMessage(message);
    }
}

function speakRadioMessage(message) {
    if (!("speechSynthesis" in window)) {
        return;
    }

    window.speechSynthesis.cancel();

    const voiceMessage = new SpeechSynthesisUtterance(message);

    voiceMessage.rate = 0.82;
    voiceMessage.pitch = 0.75;
    voiceMessage.volume = 0.8;

    window.speechSynthesis.speak(voiceMessage);
}

chooseRadioMessage();
setInterval(chooseRadioMessage, 8000);


// COMMS BUTTON

const commsButton =
    document.getElementById("comms-button");

commsButton.addEventListener("click", function () {
    commsEnabled = !commsEnabled;

    if (commsEnabled) {
        commsButton.textContent = "🔊 COMMS ENABLED";
        commsButton.classList.add("comms-on");
        chooseRadioMessage();
    } else {
        commsButton.textContent = "🔇 ENABLE COMMS";
        commsButton.classList.remove("comms-on");

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }
});
// CINEMATIC EMBERS

const embersContainer = document.getElementById("embers");

for (let i = 0; i < 25; i++) {
    const ember = document.createElement("span");

    ember.classList.add("ember");

    ember.style.left = Math.random() * 100 + "%";
    ember.style.setProperty(
        "--size",
        Math.random() * 4 + 2 + "px"
    );
    ember.style.setProperty(
        "--duration",
        Math.random() * 8 + 7 + "s"
    );
    ember.style.setProperty(
        "--drift",
        Math.random() * 160 - 80 + "px"
    );

    ember.style.animationDelay =
        Math.random() * 10 + "s";

    embersContainer.appendChild(ember);
}
const dingusCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let dingusPosition = 0;

function activateDingusProtocol() {
    document.body.classList.toggle("zombie-mode");

    const radio = document.getElementById("radio-message");

    if (document.body.classList.contains("zombie-mode")) {
        radio.textContent =
            ">> EMERGENCY: Dingus Khan has returned to the AO.";
    } else {
        radio.textContent =
            ">> Command: Dingus Protocol has been contained.";
    }

    playRadioBeep();
}

document.addEventListener("keydown", event => {
    const pressedKey =
        event.key.length === 1 ? event.key.toLowerCase() : event.key;

    if (pressedKey === dingusCode[dingusPosition]) {
        dingusPosition++;

        if (dingusPosition === dingusCode.length) {
            activateDingusProtocol();
            dingusPosition = 0;
        }
    } else {
        dingusPosition = 0;
    }
});

const operationTitle = document.querySelector("h1");

let titleTapCount = 0;
let titleTapTimer;

operationTitle.addEventListener("click", () => {
    titleTapCount++;

    clearTimeout(titleTapTimer);

    titleTapTimer = setTimeout(() => {
        titleTapCount = 0;
    }, 2500);

    if (titleTapCount === 5) {
        activateDingusProtocol();
        titleTapCount = 0;
    }
});

const squadActivityItems = [
    ["SkilledSnake", "assumed squad leadership without a vote"],
    ["SkilledSnake", "marked every location except the correct one"],
    ["SkilledSnake", "announced a flawless plan moments before disaster"],
    ["SkilledSnake", "requested complete silence while talking nonstop"],
    ["SkilledSnake", "confirmed the squad is definitely almost ready"],
    ["SkilledSnake", "used advanced tactics to avoid taking responsibility"],

    ["HeavyontheKream", "secured the refreshments"],
    ["HeavyontheKream", "deployed the emergency cooler"],
    ["HeavyontheKream", "reported critically low snack levels"],
    ["HeavyontheKream", "completed a classified beverage resupply"],
    ["HeavyontheKream", "refused to reveal what is inside the cooler"],
    ["HeavyontheKream", "gained full control of the kitchen sector"],

    ["KTdefoor", "completed a tactical snack run"],
    ["KTdefoor", "requested immediate redeployment to the couch"],
    ["KTdefoor", "pinged an objective nobody else can see"],
    ["KTdefoor", "claimed the lag was responsible"],
    ["KTdefoor", "began a story with absolutely no tactical relevance"],
    ["KTdefoor", "confirmed he has been ready for at least three hours"],

    ["mattismattismatt", "reported zero tactical concerns"],
    ["mattismattismatt", "marked Avalon as the primary objective"],
    ["mattismattismatt", "disappeared from comms during a critical moment"],
    ["mattismattismatt", "returned from the Gulag with no explanation"],
    ["mattismattismatt", "requested clarification after ignoring the briefing"],
    ["mattismattismatt", "confirmed that everything is probably fine"],

    ["GirthQuake", "entered the area of operations"],
    ["GirthQuake", "activated maximum girth"],
    ["GirthQuake", "caused unexpected seismic activity"],
    ["GirthQuake", "occupied two squad positions simultaneously"],
    ["GirthQuake", "requested a wider tactical insertion point"],
    ["GirthQuake", "was detected by radar before joining the lobby"],

    ["Avalon Command", "authorized questionable decisions"],
    ["Avalon Command", "detected elevated levels of confidence"],
    ["Avalon Command", "rejected the squad's expense report"],
    ["The Squad", "earned 500 weekend XP"],
    ["The Squad", "failed the mandatory maturity assessment"],
    ["The Squad", "has been advised not to explain this weekend"]
];

const killFeedElement = document.getElementById("kill-feed");
let squadActivityPosition = 0;

function addSquadActivityItem() {
    if (!killFeedElement) {
        return;
    }

    const activity =
        squadActivityItems[squadActivityPosition];

    const feedItem = document.createElement("div");
    feedItem.className = "feed-item";

    feedItem.innerHTML =
        `<span class="feed-name">${activity[0]}</span> ${activity[1]}`;

    killFeedElement.prepend(feedItem);

    while (killFeedElement.children.length > 4) {
        killFeedElement.removeChild(
            killFeedElement.lastChild
        );
    }

    squadActivityPosition =
        (squadActivityPosition + 1) %
        squadActivityItems.length;
}

if (killFeedElement) {
    addSquadActivityItem();
    setInterval(addSquadActivityItem, 6000);
}