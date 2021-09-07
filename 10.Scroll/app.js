// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight);
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = `0px`;
  }
});

// ********** fixed navbar ************

const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');


window.addEventListener("scroll", function () {
  const scrollHeight = this.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
//   console.log(height);

  if(scrollHeight>navHeight){
    navBar.classList.add('fixed-nav');
  }else{
    navBar.classList.remove('fixed-nav');  
  }

  if(scrollHeight>500){
    topLink.classList.add('show-link');
  }else{
    topLink.classList.remove('show-link');  
  } 

});



// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        
        let position = element.offsetTop - navHeight;
        // console.log(position);

        if(!fixedNav){
            position = position-navHeight;
        }

        if(navHeight>100){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position,
        });

        linksContainer.style.height = 0;

    });
});