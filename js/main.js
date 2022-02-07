$(document).ready(function(){
    //OVERLAY PRESENTATION
    $("#open_overlay1").click(function(){
        $("#overlay1").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay1").click(function(){
        $("#overlay1").css({
            "visibility" : "hidden"
        });
    });
    /////////////////////////////////////
    //OVERLAY SLAM
    $("#open_overlay_slam").click(function(){
        $("#overlay_slam").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_slam").click(function(){
        $("#overlay_slam").css({
            "visibility" : "hidden"
        });
    });
    ///////////////////////////////////////
    //OVERLAY SISR
    $("#open_overlay_sisr").click(function(){
        $("#overlay_sisr").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_sisr").click(function(){
        $("#overlay_sisr").css({
            "visibility" : "hidden"
        });
    });
    /////////////////////////////////////////
    //OVERLAY MILLENUIT
    $("#open_overlay_millenuit").click(function(){
        $("#overlay_millenuit").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_millenuit").click(function(){
        $("#overlay_millenuit").css({
            "visibility" : "hidden"
        });
    });
    ///////////////////////////////////////////
    //OVERLAY BLENDER GAME ENGINE
    $("#open_overlay_bge").click(function(){
        $("#overlay_bge").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_bge").click(function(){
        $("#overlay_bge").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY CONCOURS DES VINS
    $("#open_overlay_cdv").click(function(){
        $("#overlay_cdv").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_cdv").click(function(){
        $("#overlay_cdv").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY AG2R
    $("#open_overlay_ag2r").click(function(){
        $("#overlay_ag2r").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_ag2r").click(function(){
        $("#overlay_ag2r").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //////////////////////////////////////////
    //OVERLAY HTML CSS
    $("#open_overlay_htmlcss").click(function(){
        $("#overlay_htmlcss").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_htmlcss").click(function(){
        $("#overlay_htmlcss").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY BOOTSTRAP
    $("#open_overlay_bootstrap").click(function(){
        $("#overlay_bootstrap").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_bootstrap").click(function(){
        $("#overlay_bootstrap").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY ANIMATION
    $("#open_overlay_animation").click(function(){
        $("#overlay_animation").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_animation").click(function(){
        $("#overlay_animation").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY MONGODB
    $("#open_overlay_mongodb").click(function(){
        $("#overlay_mongodb").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_mongodb").click(function(){
        $("#overlay_mongodb").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY DJANGO
    $("#open_overlay_django").click(function(){
        $("#overlay_django").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_django").click(function(){
        $("#overlay_django").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //ACCORDEON PARCOURS
    $(".accordeon-content").click(function(){
        $(".accordeon").css({
            "max-height" : "0",
            "border-color" : "#343A40"
        });
        if ($(this).children(".accordeon").css("max-height") >= "2000px") {
            $(this).children(".accordeon").css({
                "max-height" : "0",
                "border-color" : "#343A40"
            });
        }
        else {
            $(this).children(".accordeon").css({
                "max-height" : "2000px",
                "border-color" : "#FFC107"
            });
        }
    });
    /////////////////////////////////////////////////
    //CONTACT
    $('.layer-1').click(function(){
        $(this).children('.layer-2').addClass('hover');
        $(this).children('label').addClass('label-hover');
    });

    $(".menu-bouton").click(function(){
        $(".menu-items").css({
            "display" : "block",
            "overflow" : "visible",
            "max-height" : "2000"
        });
    });
});