$(document).ready(function(){
    $('.image-slider').slick({
        autoplay: true,
        autoplaySpeed: 2500
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

