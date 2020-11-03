$(function() {

    var owl=$(".carousel-text");
    owl.owlCarousel({
        nav: false,
        dots: false,
        responsive:{
            0:{
                items: 1
            }
        }
    });

    $(".next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });

});



$(function() {
    var owl=$(".carousel-img");
    owl.owlCarousel({
        responsive:{
            0:{
                items: 2
            },
            991:{
                items: 4
            }
        }
    });
});