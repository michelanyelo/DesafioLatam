
// cambiar background del navbar después del scroll
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".navbartop").css("background-color", "#259FAA").removeClass("bg-transparent");
    } else {
        $(".navbartop").addClass("bg-transparent");
    }
});

// smooth scroll
