const grounds = document.querySelectorAll(".ground");
const length = grounds.length;

var interval = setInterval(() => {
    const random = Math.floor(Math.random() * length);
    
    grounds.forEach((e) => {
        e.classList.remove("active");
    });
    
    grounds[random].classList.add("active");
}, 700);

const score = document.querySelector("#score > span");
let count = 0;

grounds.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("active")) {
            count++;
            score.innerHTML = count;
        }
    });
});

window.addEventListener("load", () => {
    document.querySelector("button").addEventListener("click", () => {
        startGame();
    });
});

const startGame = () => {
    const grounds = document.querySelectorAll(".ground");
    const length = grounds.length;

    const score = document.querySelector("#score > span");
    let count = 0;

    grounds.forEach((e) => {
        e.addEventListener("click", () => {
            if (e.classList.contains("active")) {
                count++;
                score.innerHTML = count;
            }
        });
    });

    var interval = setInterval(() => {
        const random = Math.floor(Math.random() * length);

        grounds.forEach((e) => {
            e.classList.remove("active");
        });

        grounds[random].classList.add("active");
    }, 700);
};
