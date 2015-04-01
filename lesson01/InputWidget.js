var InputWidget = function(options) {

    this.elem = document.createElement('div');
    this.elem.className = 'ui-input-widget';
    this.elem.innerHTML = '<input class=\"ui-input\"/>';

    this.elem.children[0].onfocus = this.onFocus;
    this.elem.children[0].onblur = this.onBlur;

}

InputWidget.prototype.onFocus = function(e) {
    this.style.background = '#e2e2e2';
}

InputWidget.prototype.onBlur = function(e) {
    this.style.background = '#ffffff';
}
