const $ = require('jquery');

module.exports = $(() => {
    $('.intro__btn-auth').on('click', (e) => {
        e.preventDefault();
        let elem = $(e.target),
            mainIntro = elem.closest('.main--intro');

        mainIntro.addClass('active');
    });

    $('.form__button--home').on('click', (e) => {
        e.preventDefault();
        let elem = $(e.target),
            mainIntro = elem.closest('.main--intro');

        mainIntro.removeClass('active');
    });
});