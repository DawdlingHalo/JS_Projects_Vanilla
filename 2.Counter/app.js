let count = 0;

//select value and buttons
let val = document.querySelector("#val");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        a =  e.currentTarget.classList[1];
        if(a=="decrease"){
            count = count-1;
        }
        else if(a=="reset"){
            count = 0;
        }
        else{
            count = count+1;
        }
        val.textContent = count;
        console.log(e.currentTarget.classList[1]);// prints button type in console
    })
});