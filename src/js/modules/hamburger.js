const $ = require('jquery');

module.exports = $(() => {
    const hamburger = $('.hamburger');
    $('.hamburger__btn').on('click', (e) => {
        e.preventDefault();
        $('.hamburger-menu').slideToggle(700);
        hamburger.toggleClass('active');
        if(hamburger.hasClass('active')) {
            $('body, html').css("overflow", "hidden");
        } else {
            $('body, html').css("overflow", "auto");
        }
    });
});