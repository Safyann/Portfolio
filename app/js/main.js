// const $ = require('jquery');
const hamburgerInit = require('./modules/hamburger');
const welcome = require('./modules/welcome');
const googleMap = require('./modules/map');
const fillSlider = require('./modules/slider');
const transition = require('./modules/transition');
const blurInit = require('./modules/blur');
const parallax = require('./modules/parallax');
const parallaxIntro = require('./modules/parallax-intro');


if (document.getElementsByClassName('works__list').length > 0) {
    fillSlider();
}

if (document.getElementsByClassName('circle').length > 0) {
    skills();
}

if (document.getElementsByClassName('comments__btn-arrow').length > 0) {
    transition();
}

if (document.getElementsByClassName('comments').length > 0) {
    blurInit();
}

if (document.getElementsByClassName('hero__bg').length > 0) {
    parallax();
}

if (document.getElementsByClassName('parallax').length > 0) {
    parallaxIntro();
}
