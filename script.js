const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yesButton");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay, see you!";
    gif.src ="https://media.giphy.com/media/yNvmkSbnamOXEfnYxY/giphy.gif";
});