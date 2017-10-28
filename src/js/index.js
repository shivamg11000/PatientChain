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
        $(".login-page #doctor").css('background-color','#47EBB2')
        $(".login-page #patient").css('background-color', '#00D393')
    })

    

    $("#doctor").click(function(){
        $("#doctor-login").css("display", "block")
        $("#patient-login").css('display', 'none')
        $(".login-page #doctor").css('background-color', '#00D393')
        $(".login-page #patient").css('background-color', '#47F8BF')
    })



  });

