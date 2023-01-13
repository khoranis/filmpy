let menu = document.querySelector('#menu-burger');
let header = document.querySelector('.header');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};
let bgToggler = document.querySelector('#bg-toggler');
bgToggler.onclick = () =>{
    bgToggler.classList.toggle('fa-sun');
    if(bgToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

var typed = new Typed('.multiText', {
    strings: ['My Nickname is Film', 'I love Front End' , 'I work as a Programmer'],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
});

