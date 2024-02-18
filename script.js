const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yesButton");
const noBtn = document.querySelector(".noButton");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay, see you!";
    gif.src ="https://media.giphy.com/media/yNvmkSbnamOXEfnYxY/giphy.gif";
    yesBtn.style.backgroundColor = '#f9e7f7';
    yesBtn.style.borderColor = '#f9e7f7';
    yesBtn.style.color = '#f9e7f7';
    noBtn.style.backgroundColor = '#f9e7f7';
    noBtn.style.borderColor = '#f9e7f7';
    noBtn.style.color = '#f9e7f7';
});