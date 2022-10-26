let spanMess = document.querySelector('.mess-with-me');

spanMess.style.fontSize = "40px";

let paraMess = document.querySelector('p.mess-with-me');

paraMess.style.background = "green";

let hideImage = document.querySelector("#hide-me");

hideImage.style.display = "none";

let firstDino = document.querySelector('#triceratops');

firstDino.style.width = "324px";

spanMess.addEventListener("click", function(){
    spanMess.style.color = "orange";
})

firstDino.addEventListener("click", function(){
    firstDino.style.border = "3px solid red" 
})

let feathered = document.querySelector("#feathers");

feathered.addEventListener("click", function(){
    feathered.style.opacity = "0.5" 
})

let button = document.querySelector("#toggle");
let row = document.querySelector("#row");
button.addEventListener("click", function(){
    if(row.style.background  === "blue"){
        row.style.background = "white";
    }else{
        row.style.background = "blue";
    }

});

let bigDino =document.querySelector("#biggify");

bigDino.addEventListener("mouseover", function(){
    bigDino.style.width = "200px";
})

