const froggy = document.getElementById('frogButton');
const resetButton = document.getElementById("resetButtonA");
var jumpCountDisplay = document.getElementById("jumpCountDisplay");
var heartCount = 0;

froggy.addEventListener("click", function () {
    heartCount++;

    if (heartCount >= 10) {
        document.body.innerHTML = `
            <h1 class="congrats-text">Вітаю неймовірно красиву, мега розумну, безмежно талановиту, дуже щиру та добру, ультра сильну, гіпер креативну та дуже позитивну Рiквушу з днем святого валентина!</h1>
            <div class="gif-container">
                <img src="https://media.tenor.com/uGc4wAPKr_0AAAAi/heart.gif" class="celebration-gif" alt="gif">
                <img src="https://media.tenor.com/uGc4wAPKr_0AAAAi/heart.gif" class="celebration-gif" alt="gif">
            </div>`;
    }
    else {
        moveButton();
    }
});

function moveButton() {
    var x = Math.random() * (window.innerWidth - 200);
    var y = Math.random() * (window.innerHeight - 200);
    froggy.style.left = `${x}px`;
    froggy.style.top = `${y}px`;
}

jumpCountDisplay.textContent = "Злови сердечко!";
