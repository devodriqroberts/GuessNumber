"use strict";

let secretNumber;
let score = 20;

const resetGame = () => {
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector(".message").textContent =
        "Back for more? Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = null;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    console.log(secretNumber);
};

const setSecretNumber = () => {
    secretNumber = Math.ceil(Math.random() * 20);
    console.log(secretNumber);
};

setSecretNumber();

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess | (guess < 0)) {
        document.querySelector(".message").textContent =
            "❌ Please enter a valid number. (> 0)";
        return;
    }

    if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "👀 To High!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You have lost the game!";
            document.querySelector(".score").textContent = "0";
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🥶 To Low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You have lost the game!";
            document.querySelector(".score").textContent = "0";
        }
    } else {
        document.querySelector(".message").textContent = "🎉 Correct!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    }
});

document.querySelector(".again").addEventListener("click", () => {
    resetGame();
});
