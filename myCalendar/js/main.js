(function (window) {
    var initCalendar = function () {
        var calendar = new Calendar(6,2015);
        calendar.render().setupEvents();
    };

    window.addEventListener('load', initCalendar);

}(window));