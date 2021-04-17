$(document).ready(function() {
    $('#serfacial').owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: true,
        loop:true,
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
                items:  1,
                dots: false
            },
            768: {
                items: 3,
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
$(document).ready(function() {
    $('#scar').owlCarousel({
        autoplay: false,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 2,
        nav: true,
        loop:false,
        lazyLoad: true,
      
        padding:1000,
        stagePadding:300,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
                items:  1,
                dots: false
            },
            768: {
                items: 2,
                dots: true
            },
            992: {
                items: 2,
                dots: true
            },
            1200: {
                items: 2,
                dots: true
            },
            
        }
    });

});
$(document).ready(function() {
    $('#hifu').owlCarousel({
        autoplay: false,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 3,
        nav: true,
        loop:false,
        lazyLoad: true,
      
        padding:1000,
        stagePadding:150,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
                items:  1,
                dots: false
            },
            768: {
                items: 3,
                dots: true
            },
            992: {
                items: 3,
                dots: true
            },
            1200: {
                items: 3,
                dots: true
            },
            
        }
    });

});