var InputWidget = function() {

    this.elem = document.createElement('div');
    this.elem.className = 'ui-input-widget';
    this.elem.innerHTML = '<input class=\"ui-input\"/>';

    this.elem.onclick = this.onClick;

}

InputWidget.prototype.onClick = function(e) {
    this.elem.style.background = 'red';
}
