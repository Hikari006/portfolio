document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionID = event.target.getAttribute('href').substring(1);
            document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});

const txts=document.querySelector(".text").children;
txtsLen=txts.length;
let index=0;
const textInTimer=3000;
const textOutTimer=2800;

function animateText(){
    for(let i=0;i<txtsLen;i++){
        txts[i].classList.remove("text-in","text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function(){
        txts[index].classList.add("text-out");
    },textOutTimer)

    setTimeout(function(){
        if(index==txtsLen-1){
            index=0;
        }
        else{
            index++;}


        animateText();
    },textInTimer);
}

window.onload=animateText;




window.addEventListener('scroll' , reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;  
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');

    }
    else{
        reveals[i].classList.remove('active');
    }
}

}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'

}