module.exports = function() {
  var slides = [
    {
        subtitle: "Лендинг для магазина бургеров Mr.Burger", 
        techs: "HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git",
        link: "https://safyann.github.io/Burgers/",
        img: "img/content/works/burgers.png",
        active: "active",
        },
        {
        subtitle: "Сайт коворкинга Воркадиум", 
        techs: "HTML5, CSS3, Git",
        link: "https://safyann.github.io/Coworking/",
        img: "img/content/works/coworking.png",
        active: "",
        },
        {
        subtitle: "Сайт для барбершопа Бородинский", 
        techs: "HTML5, CSS3, Git",
        link: "https://safyann.github.io/Barbershop/",
        img: "img/content/works/barbershop.png",
        active: "",
        },
        {
        subtitle: "Сайт-портфолио веб-разработчика", 
        techs: "HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git",
        link: "https://safyann.github.io/Portfolio/",
        img: "img/content/works/portfolio.png",
        active: "",
        }
    ];

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
