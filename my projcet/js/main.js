// toggle icon navbar










$(document).ready(function(){
    $('.box-menu').click(function(){
        if($(this).hasClass('expand')){
            $('nav').slideUp(function(){
                $('.box-menu').removeClass('expand');
                $('.fas').removeClass('expand');
            })
        }
        else{
            $(this).addClass('expand');
            setTimeout(function(){
                $('.fas').addClass('expand');
                $('nav').stop().slideDown();
            })
        }
    })
    
})






// sticky navbar
document.addEventListener('scroll', () => {
const header = document.querySelector('header');


    if (window.scrollY > 0) {
        header.classList.add('navbar');

    }
    else{
        header.classList.remove('navbar')

    }

    menuIcon.classList.remove('fas');
    navbar.classList.remove('active')
});


          // active navbar

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
            // active sections and animate
           
        }
      
        
    });
};


