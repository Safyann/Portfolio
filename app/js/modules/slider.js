module.exports = function() {
  const slides = [{ subtitle: "Лендинг для магазина бургеров Mr.Burger", techs: "Адаптивный сайт, постраничный скролл, удобный слайдер, выпадающие и раскрывающиеся меню, форма заказа, интерактивная кастомизированная карта. Технологии: HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git", link: "https://safyann.github.io/Burgers/", img: "img/content/works/burgers.png", active: "active" }, { subtitle: "Сайт коворкинга Воркадиум", techs: "Качественная верстка по БЭМ, плавные переходы, анимация. Технологии: HTML5, CSS3, Git", link: "https://safyann.github.io/Coworking/", img: "img/content/works/coworking.png", active: "" }, { subtitle: "Сайт для барбершопа Бородинский", techs: "HTML5, CSS3, Git", link: "https://safyann.github.io/Barbershop/", img: "img/content/works/barbershop.png", active: "" }, { subtitle: "Сайт-портфолио веб-разработчика", techs: "Адаптивный сайт, parallax-эффекты, стильный слайдер, форма обратной связи, страница авторизации, интерактивная кастомизированная карта. Технологии: HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git", link: "https://safyann.github.io/Portfolio/", img: "img/content/works/portfolio.png", active: "" }, { subtitle: "Сайт-визитка для веб-студии NЁRDS", techs: "PUG, SASS, JavaScript & jQuery, Gulp, Git", link: "https://safyann.github.io/Nerds/", img: "img/content/works/nerds.png", active: "" }, { subtitle: "Сайт для поиска отелей SEDONA", techs: "PUG, SASS, JavaScript & jQuery, Gulp, Git, резиновая верстка", link: "https://safyann.github.io/Sedona/", img: "img/content/works/sedona.png", active: "" }];

  var slider = document.querySelector(".works__list"),
    showingSlide = document.querySelector(".works__img"),
    nextSlide = document.querySelector(".slide-next"),
    prevSlide = document.querySelector(".slide-prev"),
    btnPrev = document.querySelector(".works__btn--prev"),
    btnNext = document.querySelector(".works__btn--next"),
    subtitle = document.querySelector(".subtitle--works"),
    techs = document.querySelector(".works__techs"),
    link = document.querySelector(".works__link"),
    currentSlide = 0,
    slidesLength = slides.length;

  function slideLimiter(eq) {
    if (eq >= slidesLength) {
      return 0;
    } else if (eq < 0) {
      return slidesLength - 1;
    } else {
      return eq;
    }
  }

  function fillSlider() {
    var prev = slideLimiter(currentSlide - 1),
      next = slideLimiter(currentSlide + 1);

    showingSlide.setAttribute("src", slides[currentSlide].img);
    subtitle.innerText = slides[currentSlide].subtitle;
    techs.innerText = slides[currentSlide].techs;
    link.setAttribute("href", slides[currentSlide].link);
    prevSlide.setAttribute("src", slides[prev].img);
    nextSlide.setAttribute("src", slides[next].img);
  }

  fillSlider();

  btnNext.addEventListener("click", function(e) {
    currentSlide = slideLimiter(currentSlide + 1);
    showingSlide.classList.add('animate');
    fillSlider();
    showingSlide.classList.remove('animate');
  });

  btnPrev.addEventListener("click", function(e) {
    currentSlide = slideLimiter(currentSlide - 1);
    fillSlider();
  });
};
