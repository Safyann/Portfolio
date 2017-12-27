module.exports = function () {

    var parallaxBox = document.getElementById('parallax'),
        layers = parallaxBox.children;

    var moveLayers = function (e) {
        var initialX = (window.innerWidth / 2) - e.pageX;
        var initialY = (window.innerHeight / 2) - e.pageY;

        [].slice.call(layers).forEach(function (layer, index) {
            var divider = index / 100,
              positionX = initialX * divider,
              positionY = initialY * divider,
              bottomPosition = window.innerHeight / 2 * divider,
              transform2D = "translate(" + positionX + "px," + positionY + "px)",
              image = layer.firstElementChild;

            layer.style.transform = transform2D;
            image.style.bottom = "-" + bottomPosition + "px";
        });
    };
    window.addEventListener('mousemove', moveLayers);
};