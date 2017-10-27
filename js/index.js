$(document).ready(function(){
    $('.image-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $("#patient").click(function(){
        $("#doctor-login").css("display", "none")
        $("#patient-login").css('display', 'block')
    })

    $("#doctor").click(function(){
        $("#doctor-login").css("display", "block")
        $("#patient-login").css('display', 'none')
    })

  });

