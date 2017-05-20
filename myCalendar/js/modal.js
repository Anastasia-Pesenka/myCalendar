function Modal(selector) {
    this.el = document.querySelector(selector);
    this.el.addEventListener('click', this.clickModalHandler.bind(this));
}


Modal.prototype.clickModalHandler = function (event) {
    var targetClasses = event.target.className.split(' ');
    if (targetClasses.indexOf('delete') !== -1 ||
        targetClasses.indexOf('cancel') !== -1) {
        this.hide();
    }
};


Modal.prototype.show = function () {
    console.log(this.el)
    this.el.classList.add('is-active');
};

/**
 * Hide modal window
 */
Modal.prototype.hide = function () {
    this.el.classList.remove('is-active');
};
