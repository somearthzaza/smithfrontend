$(document).ready(function() {
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
            480: {
                items: 2,
                dots: false
            },
            768: {
                items: 3,
                dots: false
            },
            992: {
                items: 3,
                dots: true
            },
            1200: {
                items: 4,
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
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
                items: 2,
                dots: false
            },
            768: {
                items: 4,
                dots: true
            },
            992: {
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

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 100) {
        if (window.innerWidth > 981) {
            nav.classList.add('fixed-top');
        } else {
            nav.classList.remove('fixed-top');
        }
        nav.style.padding = "20px 10px";
        nav.classList.add('ftco-nav');
        nav.classList.remove('bg-dark');
    }
    if (window.pageYOffset > 100) {
        nav.style.padding = "20px 10px"
        nav.classList.add('fixed-top');
        nav.classList.remove('ftco-nav');
        nav.classList.add('bg-dark');

    } else {

        nav.style.padding = "10px 10px"
        nav.classList.remove("bg-light");
    }
});
window.addEventListener('resize', function() {
    var nav = document.querySelector("nav");
    if (window.innerWidth < 980) {
        nav.classList.remove('fixed-top');
    } else if (window.innerWidth > 981) {
        nav.classList.add('fixed-top');
    }
});

$('.btn-zoom').magnificPopup({
    type: 'image'        // other options
});

$("#firstmap").click(function() {

    $("#firstmap").addClass("actbtmap");
    $("#secondmap").removeClass("actbtmap");
    $("#thirdmap").removeClass("actbtmap");
    $("#map1").show();
    $("#map2").hide();
    $("#map3").hide();
});
$("#secondmap").click(function() {
    $("#secondmap").addClass("actbtmap");
    $("#firstmap").removeClass("actbtmap");
    $("#thirdmap").removeClass("actbtmap");
    $("#map1").hide();
    $("#map3").hide();
    $("#map2").show();
});
$("#thirdmap").click(function () {
    $("#thirdmap").addClass("actbtmap");
   $("#secondmap").removeClass("actbtmap");
   $("#firstmap").removeClass("actbtmap");
   $("#map1").hide();
   $("#map2").hide();
   $("#map3").show();
});

