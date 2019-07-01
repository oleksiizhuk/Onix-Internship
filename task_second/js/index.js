$(function () {

    const html = $("html, body");
    const ul = $('.header__nav__ul');

    ul.on('click', 'a', function (event) {
        event.preventDefault();
        const animationSpeed = 1000;
        const id = $(this).attr('href');
        const top = $(id).offset().top;
        html.animate({scrollTop: top}, animationSpeed);
        html.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            html.stop();
        });
    });

});
