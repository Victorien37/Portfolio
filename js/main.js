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
    //OVERLAY AC_BLANQUI
    $("#open_overlay_acblanqui").click(function(){
        animateCSS('#overlay_acblanqui', 'fadeInLeft');
        $("#overlay_acblanqui").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_acblanqui").click(function(){
        $("#overlay_acblanqui").css({
            "visibility" : "hidden"
        });
    });
    /////////////////////////////////////////
    //OVERLAY MILLENUIT
    $("#open_overlay_millenuit").click(function(){
        animateCSS('#overlay_millenuit', 'fadeInLeft');
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
        animateCSS('#overlay_bge', 'fadeInRight');
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
        animateCSS('#overlay_cdv', 'fadeInLeft');
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
        animateCSS('#overlay_ag2r', 'fadeInRight');
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
    //OVERLAY SEG
    $("#open_overlay_seg").click(function(){
        animateCSS('#overlay_seg', 'fadeInLeft');
        $("#overlay_seg").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_seg").click(function(){
        $("#overlay_seg").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY PORTFOLIO
    $("#open_overlay_portfolio").click(function(){
        animateCSS('#overlay_portfolio', 'fadeInRight');
        $("#overlay_portfolio").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_portfolio").click(function(){
        $("#overlay_portfolio").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //////////////////////////////////////////
    //OVERLAY HTML CSS
    $("#open_overlay_htmlcss").click(function(){
        animateCSS('#overlay_htmlcss', 'backInLeft');
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
        animateCSS('#overlay_bootstrap', 'backInRight');
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
        animateCSS('#overlay_animation', 'backInLeft');
        $("#overlay_animation").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_animation").click(function(){
        $("#overlay_animation").css({
            "visibility" : "hidden"
        });
    });
    //OVERLAY DJANGO
    $("#open_overlay_django").click(function(){
        animateCSS('#overlay_django', 'backInRight');
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
    //OVERLAY ANSSI
    $("#open_overlay_anssi").click(function(){
        animateCSS('#overlay_anssi', 'backInRight');
        $("#overlay_anssi").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_anssi").click(function(){
        $("#overlay_anssi").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY VOLTAIRE
    $("#open_overlay_voltaire").click(function(){
        animateCSS('#overlay_voltaire', 'backInLeft');
        $("#overlay_voltaire").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_voltaire").click(function(){
        $("#overlay_voltaire").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY NODEJS
    $("#open_overlay_nodejs").click(function(){
        animateCSS('#overlay_nodejs', 'backInRight');
        $("#overlay_nodejs").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_nodejs").click(function(){
        $("#overlay_nodejs").css({
            "visibility" : "hidden"
        });
    });
    //////////////////////////////////////////
    //OVERLAY VEILLE TECHNOLOGIQUE
    $("#open_overlay_technologique").click(function(){
        animateCSS('#overlay_technologique', 'fadeInDown');
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
    //OVERLAY VEILLE TECHNOLOGIQUE RSS
    $("#open_overlay_technologique_rss").click(function(){
        animateCSS('#overlay_technologique_rss', 'bounceIn');
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
    //OVERLAY VEILLE TECHNOLOGIQUE LANGAGE
    $("#open_overlay_technologique_langage").click(function(){
        animateCSS('#overlay_technologique_langage', 'fadeInUp');
        $("#overlay_technologique_langage").css({
            "visibility" : "visible"
        });
    });
    $("#close_overlay_technologique_langage").click(function(){
        $("#overlay_technologique_langage").css({
            "visibility" : "hidden"
        });
    });
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
        } // FERMETURE DE L'ACCORDEON
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