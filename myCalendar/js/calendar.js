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
    this.helperModal = new Modal('.modal');
    this.id = document.getElementById('container')
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

Calendar.prototype.setupEvents = function () {
    this.id.addEventListener('click', clickHandler.bind(this) );
}

function clickHandler(event) {
    var targetTD = event.target;
    if (+targetTD.innerHTML>0) {
        this.helperModal.show();
    }

}



/*    var diaryHeader = document.createElement('div');
    diaryHeader.className = 'content';
    var header = document.createElement('h1');
    var headerText = document.createTextNode(this.getHeading().replace('{{dayNumber}}', this.dayNumber));
    header.appendChild(headerText);
    diaryHeader.appendChild(header);
    return diaryHeader;*/
// };

/**
 * Render block for displaying error-messages
 * @returns {Element}
 */
/*
Diary.prototype.renderErrorMessageBlock = function () {
    var errorMessageBlock = document.createElement('div');
    errorMessageBlock.className = 'notification is-danger error-message has-text-centered';
    return errorMessageBlock;
};

/!**
 * Render panel
 * @returns {Element}
 *!/
Diary.prototype.renderPanel = function () {
    var diaryPanel = document.createElement('nav');
    diaryPanel.className = 'panel';
    diaryPanel.appendChild(this.renderPanelHeading());
    diaryPanel.appendChild(this.renderBlockWithInput('Add event', 'add-event'));
    return diaryPanel;
};

/!**
 * Render heading of panel
 * @returns {Element}
 *!/
Diary.prototype.renderPanelHeading = function () {
    var diaryPanelHeading = document.createElement('div');
    diaryPanelHeading.className = 'panel-heading';
    var columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'columns';
    columnsWrapper.appendChild(this.addColumn('Prev', 'prev'));
    columnsWrapper.appendChild(this.addColumn(this.dayNumber + ' day', 'has-text-centered '));
    columnsWrapper.appendChild(this.addColumn('Next', 'has-text-right next'));
    diaryPanelHeading.appendChild(columnsWrapper);
    return diaryPanelHeading;
};

/!**
 * Render block of panel
 * @param innerElements
 * @returns {Element}
 *!/
Diary.prototype.renderPanelBlock = function (innerElements) {
    var panelBlock = document.createElement('div');
    panelBlock.className = 'panel-block';
    if (innerElements) {
        panelBlock.appendChild(innerElements);
    }
    return panelBlock;
};

/!**
 * Render input
 * @param {string} placeholder
 * @param {string} cssClasses
 * @returns {Element}
 *!/
Diary.prototype.renderInput = function (placeholder, cssClasses) {
    var wrapper = document.createElement('p');
    wrapper.className = 'control';
    var input = document.createElement('input');
    input.className = 'input is-small ' + cssClasses || '';
    input.attributes.type = 'text';
    input.placeholder = placeholder;
    wrapper.appendChild(input);
    return wrapper;
};

/!**
 * Render block with input
 * @param {string} placeholder
 * @param {string} cssClasses
 * @returns {Element}
 *!/
Diary.prototype.renderBlockWithInput = function (placeholder, cssClasses) {
    var block = this.renderPanelBlock();
    block.appendChild(this.renderInput(placeholder, cssClasses));
    return block;
};

/!**
 * Render column
 * @param {string} text
 * @param {string} cssClasses
 * @returns {Element}
 *!/
Diary.prototype.addColumn = function (text, cssClasses) {
    var column = document.createElement('div');
    column.className = 'column ' + cssClasses || '';
    column.innerText = text || '';
    return column;
};
*/
