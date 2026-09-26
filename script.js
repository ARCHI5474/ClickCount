const countElement = document.getElementById("count");

const buttonElement =document.getElementById("button");

let count = 0;

buttonElement.addEventListener("click", function(){
    count = count + 1;
    countElement.textContent = count;
});