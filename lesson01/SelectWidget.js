var SelectWidget = function (options) {

    var items = (options && options.items) || [];

    this.elem = document.createElement('div');
    this.elem.className = 'ui-select-widget';
    this.elem.innerHTML = '<select class=\"ui-select\"></select>';

    this.addOptions(items);
};

SelectWidget.prototype.addOptions = function(items) {
    var select = this.elem.querySelector('select');
    for (var i=0; i<items.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = items[i];
        option.value = items[i];
        select.appendChild(option);
    }
};
