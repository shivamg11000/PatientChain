$(document).ready(function(){
    $('.image-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        mobileFirst: true
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

