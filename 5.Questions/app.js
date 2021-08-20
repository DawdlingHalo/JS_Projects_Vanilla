//1. using selectors inside element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click',function(){
        question.classList.toggle('show-text');
    });
});


//2.traversing dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         //e-> Event
//         const question = e.currentTarget.parentElement.parentElement;
//         //gives parent of parent
//         question.classList.toggle('show-text')
//     })
// })
