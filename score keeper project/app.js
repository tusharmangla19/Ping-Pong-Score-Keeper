const player1 = document.querySelector("#btn1");
const player2 = document.querySelector("#btn2");
const resetbutton = document.querySelector("#Reset");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const game = document.querySelector("#game")


let p1Score = 0;
let p2Score = 0;
let winningScore = 10;
let isGameOver = false;

player1.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1display.classList.add("has-text-success")
            p2display.classList.add("has-text-danger")
            player1.disabled = true
            player2.disabled = true
        }
        p1display.textContent = p1Score
    }

})

player2.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1display.classList.add("has-text-success")
            p2display.classList.add("has-text-danger")
            player1.disabled = true
            player2.disabled = true
        }
        p2display.textContent = p2Score
    }
})

game.addEventListener("change", function () {
    winningScore = parseInt(game.value)
    reset()
})

resetbutton.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0
    p1display.textContent = 0
    p2display.textContent = 0
    p1display.classList.remove("has-text-success", "has-text-danger")
    p2display.classList.remove("has-text-success", "has-text-danger")
    player1.disabled = false
    player2.disabled = false
}





















































