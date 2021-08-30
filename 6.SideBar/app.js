const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

var x=0;

toggleBtn.addEventListener('click',function(){
    sideBar.classList.toggle('show-sidebar');
    console.log(sideBar.classList);
});

closeBtn.addEventListener('click',function(){
    sideBar.classList.toggle('show-sidebar');
    console.log(sideBar.classList);
})
