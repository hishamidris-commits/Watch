
//        مراقبة السكرول و تنفيذ الامر

window.addEventListener('load',revealOnScroll);
window.addEventListener('scroll',revealOnScroll);


function revealOnScroll(){
    var elements = document.querySelectorAll('.reveal-element');
    elements.forEach(function(el){
        var windowHeight = window.innerHeight;
        var elementTop = el.getBoundingClientRect().top;
        var revealPoint = 150;
        if(elementTop < windowHeight -  revealPoint ){
            el.classList.add('active');
        }
    });
}










