$(document).ready(function(){
    $('#cardproduct').owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: true,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 2,
            dots: false
        },
        728: {
            items: 3,
            dots: false
        },
        960: {
            items: 3,
            dots: true
        },
        1200: {
            items: 3,
            dots: true
        },
    }
    });
    $('#cardservice').owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: true,
        loop: true,
        lazyLoad: true,
        margin: 5,
        padding: 5,
        stagePadding: 5,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            485: {
                items: 2,
                dots: false
            },
            728: {
                items: 4,
                dots: false
            },
            960: {
                items: 4,
                dots: true
            },
            1200: {
                items: 4,
                dots: true
            },
        }
    });
});
var nav = document.querySelector("nav");

window.addEventListener('scroll' , function () {
    if(window.pageYOffset <100){
        nav.style.padding = "20px 10px";
        nav.classList.add('ftco-nav');
        nav.classList.remove('bg-dark');
    }
    if(window.pageYOffset > 100){
        nav.style.padding = "20px 10px"
        nav.classList.remove('ftco-nav');
        nav.classList.add('bg-dark');
    }else{
        nav.style.padding = "10px 10px"
        nav.classList.remove("bg-light");
    }
})