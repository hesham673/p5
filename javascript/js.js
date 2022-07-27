let section = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".skills span")
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
    if(window.scrollY >= section2.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true ;
        }
    if(window.scrollY >=section.offsetTop+500 || window.scrollY <section.offsetTop-100){
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
}


// ---------------------------------------------------------
let section2 = document.querySelector(".stats")
let nums = document.querySelectorAll(".number")
console.log(section2)
let started = false;

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },300/goal)
}