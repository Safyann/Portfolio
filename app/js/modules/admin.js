var $ = require('jquery');

module.exports = function () {
    var linkTabs = (function () {

        var sections = $('.js-section'),
            tabs = $('.js-tab');

        var addActive = function (Eq) {
            sections.eq(Eq).addClass('active')
                .siblings().removeClass('active');

            tabs.eq(Eq).addClass('active')
                .siblings().removeClass('active');
        }

        addActive(0);

        return {
            init: function () {
                tabs.on('click', function (e) {
                    var elem = $(e.target),
                        showEq = elem.index();

                    addActive(showEq);
                })

            }
        }


    }());

    linkTabs.init();

}