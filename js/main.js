$(document).ready(function(){
    /////////////////////////////////////

    const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

    //OVERLAY SLAM
    $("#open_overlay_slam").click(function(){
        animateCSS('#overlay_slam', 'fadeIn');
        $("#overlay_slam").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_slam").click(function(){
        // animateCSS('#overlay_slam', 'bounceOutDown');
        $("#overlay_slam").css({
            "visibility" : "hidden"
        });
    });
    ///////////////////////////////////////
    //OVERLAY SISR
    $("#open_overlay_sisr").click(function(){
        animateCSS('#overlay_sisr', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
        animateCSS('#overlay_slam', 'fadeIn');
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
    //OVERLAY VEILLE TECHNOLOGIQUE
    $("#open_overlay_technologique").click(function(){
        animateCSS('#overlay_slam', 'fadeIn');
        $("#overlay_technologique").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_technologique").click(function(){
        $("#overlay_technologique").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY D'OVERLAY VEILLE TECHNOLOGIQUE RSS
    $("#open_overlay_technologique_rss").click(function(){
        animateCSS('#overlay_slam', 'fadeIn');
        $("#overlay_technologique_rss").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_technologique_rss").click(function(){
        $("#overlay_technologique_rss").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY D'OVERLAY VEILLE TECHNOLOGIQUE LANGAGE
    $("#open_overlay_technologique_langage").click(function(){
        animateCSS('#overlay_slam', 'fadeIn');
        $("#overlay_technologique_langage").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_technologique_langage").click(function(){
        $("#overlay_technologique_langage").css({
            "visibility" : "hidden"
        });
    });

    //////////////////////////////////////////
    //OVERLAY VEILLE JURIDIQUE
    $("#open_overlay_juridique").click(function(){
        animateCSS('#overlay_slam', 'fadeIn');
        $("#overlay_juridique").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_juridique").click(function(){
        $("#overlay_juridique").css({
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
        // OUVERTURE DE L'ACCORDEON
        if ($(this).children(".accordeon").css("max-height") >= "2000px") {
            $(this).children(".accordeon").css({
                "max-height" : "0",
                "border-color" : "#343A40"
            });
            // document.querySelector(".open").setAttributeNS("http://www.w3.org/2000/svg", "d", "M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z");
        } // FERMETURE DE L'ACCORDEON
        else {
            $(this).children(".accordeon").css({
                "max-height" : "2000px",
                "border-color" : "#FFC107"
            });
            // $(this).document.querySelector(".open").setAttributeNS("http://www.w3.org/2000/svg", "d", "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z");
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