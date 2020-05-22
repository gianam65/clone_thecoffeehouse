$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})