module.exports = function () {

    var parallax = (function () {
        var bg = document.querySelector(".hero__bg"),
          bgTitle = document.querySelector(".hero__bg-title"),
          owner = document.querySelector(".hero__owner");

        return {
            move: function(block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%';
                var transform3D = 'translate3d(0,' + strafe + ',0)';
                var style = block.style;

                style.transform = transform3D;
                style.webkitTransform = transform3D;
            },

            init: function (wScroll) {
                this.move(bg, wScroll, 50);
                this.move(bgTitle, wScroll, 25);
                this.move(owner, wScroll, 5);
                bgTitle.style.left = '0%';
            }
        };
    })();
    window.onscroll = function () {
        var wScroll = window.pageYOffset;

        parallax.init(wScroll);
    };
};