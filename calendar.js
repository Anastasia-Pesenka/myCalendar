var selectedMonth = document.getElementById("selectedMonth");
var arrMonth=['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
for (var i = 0; i < 12; i++) {
    option= document.createElement("option");
    text = document.createTextNode(arrMonth[i]);
    option.setAttribute('value', i);
    option.appendChild(text);
    selectedMonth.appendChild(option);
}

var selectedYear = document.getElementById("selectedYear");
for (var i = 1900; i < 2018; i++) {
    option= document.createElement("option");
    text = document.createTextNode(i);
    option.setAttribute('value', i);
    option.appendChild(text);
    selectedYear.appendChild(option);
}



function Calendar(month, year) {
    this.month = month;
    this.year = year;
    this.selector = '.calendar-wrapper';
}


Calendar.prototype.render = function () {
    var calendarWrapper = document.querySelector(this.selector);
    calendarWrapper.innerHTML = '';

    var week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    var date = new Date(this.year, this.month);
    var table = document.createElement('table');
    table.className = 'table';
    var thead=document.createElement('thead');
    var tr = document.createElement("tr");
    for (var i = 0; i < 7; i++) {
        td = document.createElement("td");
        text = document.createTextNode(week[i]);
        td.appendChild(text);
        tr.appendChild(td);
        thead.appendChild(tr);
    }
    table.appendChild(thead);

    tr = document.createElement("tr");
    for (var i = 1; i <= 7; i++) {
        td = document.createElement("td");
        if (i < date.getDay()) {
            text = document.createTextNode(' ');
        } else {

            text = document.createTextNode(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        td.appendChild(text);
        tr.appendChild(td);
    }
    table.appendChild(tr);


    tr = document.createElement("tr");
    table.appendChild(tr);
    while (date.getMonth() == this.month) {

        td = document.createElement("td");
        text = document.createTextNode(date.getDate());
        td.appendChild(text);
        tr.appendChild(td);

        if (date.getDay() == 0) {
            tr = document.createElement("tr");
            table.appendChild(tr);
        }

        date.setDate(date.getDate() + 1);
    }

    calendarWrapper.appendChild(table);
    return this;
};

(function (window) {
    var initCalendar = function () {
        var calendar = new Calendar(6,2015);
        calendar.render().setupEvents();
    };

    window.addEventListener('load', initCalendar);

}(window));


