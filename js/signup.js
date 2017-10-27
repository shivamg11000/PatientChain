$(function(){
    $("#patient-span").click(function(){
        $("#patient-sign-up").css('display', 'none')
        $("#doctor-sign-up").css('display', 'block')
    })
    $("#doctor-span").click(function(){
        $("#patient-sign-up").css('display', 'block')
        $("#doctor-sign-up").css('display', 'none')
    })
})