//Singletone = (function() {
//    var inst = {};
//
//    return function() {
//        if (!inst) inst = this;
//        return inst;
//    }
//})();

// Factory

var UI = function(type, options) {
    var widget = new UI.constructor[type](options);

    UI.initWidget(widget);

    return widget;
}

UI.initWidget = function(widget) {
    var container = document.getElementById('ui-container'),
        item = document.createElement('div');
    item.className = 'ui-item';

    item.appendChild(widget.elem);
    container.appendChild(item);
}

UI.constructor = {
    'input' : InputWidget,
    'select' : SelectWidget
}


// Add widgets

var input = new UI('input');
var input = new UI('select', {
    items: ['Option1', 'Option2', 'Option3']
});

