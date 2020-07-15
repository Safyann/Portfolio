module.exports = function() {
  /*document.body.onload = function () {
    setTimeout(function() {
      var preloader = document.getElementById('js-preloader');
        if (!preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }           
    },500)
  };*/

  const images = document.images;
  const imagesTotalCount = images.length;
  const persDisplay = document.getElementById("load-percent");
  const preloader = document.getElementById("js-preloader");

  let imagesLoadedCount = 0;

  for (let i = 0; i < imagesTotalCount; i++) {
    let imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }

  function imageLoaded() {
    document.body.style.overflow = "hidden";
    imagesLoadedCount++;
    persDisplay.innerHTML = Math.ceil(
      100 / imagesTotalCount * imagesLoadedCount
    );

    if (imagesLoadedCount >= imagesTotalCount) {
      setTimeout(function() {
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
          document.body.style.overflow = "auto";
        }
      }, 1000);
    }
  }

  /*
    var loadContent = function () {
      console.log('Дом загружен');

      function load(elem) {
        return new Promise((resolve,reject) => {
            elem.addEventListener('load', resolve);
        });
      }
        
      load(preloader)
        .then(() => {
          console.log('Прелоудер загружен');
        })
        .then(() => load(images))
        .then(() => {
          //return load(images);
          //return imageLoaded();
        console.log('Изображения загружены');
     });
    }

    document.addEventListener("DOMContentLoaded", loadContent);
*/
};
