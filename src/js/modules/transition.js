const $ = require('jquery');

module.exports = () => {
    function ScrollTo(sectionNumber) {
        var target = $('.section').eq(sectionNumber).offset().top;
        $('html, body').animate({
            scrollTop : target
        }, 1000);
    }

    $(() => {
        $('.hero__arrow-btn').on('click', (e) => {
            e.preventDefault();
            ScrollTo(1);
        });
    });

    $(() => {
        $('.comments__btn-arrow').on('click', (e) => {
            e.preventDefault();
            ScrollTo(0);
        });
    });
};