function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }
}

function openEnvelope(type) {

    const message = document.getElementById("letterMessage");

    let text = "";

    if (type === "miss") {
        text = "I know the distance can suck sometimes, but I'm still here. ♡";
    }

    if (type === "bad") {
        text = "Whatever happened today, please remember that one bad day doesn't define you, I love you alot and I'm always here.";
    }

    if (type === "mad") {
        text = "Please don't be mad at me, I know I can be irritating and over the top at times but I can't help ir. ♡";
    }

    if (type === "sleep") {
        text = "Put your phone down, get comfy, and let yourself rest. Goodnight, my baby. 🌙";
    }

    message.innerHTML = text;
    message.style.display = "block";
}
function secretMessage() {
    document.getElementById("secretMessage").innerHTML =
        "You found my secret. I've had my eye on you for a while, I love you so much bae, MWAHHH😋💕.";
}

function finalSurprise() {

    document.getElementById("finalMessage").innerHTML =
        "No matter how many kilometres are between us, I'm really glad our paths crossed. I can't say it enough, I love you. ♡";
}

function changeAffirmation(card) {

    const messages = [
        "I love you. ♡",
        "I thank Allah for your existence. ✿",
        "You are so sweet. ♡",
        "You deserve the best things. ✧",
        "I'm proud of you. ♡",
        "You matter. ☁︎",
        "You are doing better than you think. ✦"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    card.innerHTML = "<p>" + randomMessage + "</p>";
}

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    const animation = heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 0
            },
            {
                transform: "translateY(-100vh)",
                opacity: 0.7
            }
        ],
        {
            duration: 6000,
            easing: "linear"
        }
    );

    animation.onfinish = function() {
        heart.remove();
    };
}

setInterval(createFloatingHeart, 1500);

function toggleMusic() {

    const song = document.getElementById("ourSong");
    const button = document.getElementById("musicButton");

    if (song.paused) {
        song.play();
        button.innerHTML = "⏸ Pause our song";
    } else {
        song.pause();
        button.innerHTML = "🎵 Play our song";
    }
}
