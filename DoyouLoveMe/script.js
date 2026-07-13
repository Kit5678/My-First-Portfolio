const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

let isFirstMove = true;
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I knew you love me ❤️";
    gif.src = "https://i.pinimg.com/originals/60/3d/3f/603d3f329fa043cc98c1c1555913c9d8.gif";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    
    if (isFirstMove) {
        const placeholder = document.createElement("div");
        placeholder.style.width = "100px";
        placeholder.style.height = "40px";
        btnGroup.appendChild(placeholder);
        isFirstMove = false;
    }
    
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "999";
});
