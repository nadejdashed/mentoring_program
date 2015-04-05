var InputWidget = function() {}

InputWidget.prototype.onFocus = function(e) {
    this.style.background = '#e2e2e2';
};
InputWidget.prototype.onBlur = function(e) {
    this.style.background = '#ffffff';
};

UI.add('input', InputWidget);
UI.create('input');