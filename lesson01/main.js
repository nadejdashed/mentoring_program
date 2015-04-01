//Singletone = (function() {
//    var inst = {};
//
//    return function() {
//        if (!inst) inst = this;
//        return inst;
//    }
//})();

var UI = function(type) {
    UI.constructor[type].prototype = this;
    var widget = new UI.constructor[type];

    UI.initWidget(widget);

    return widget;
}

UI.initWidget = function(widget) {
    var container = document.getElementById('ui-container');
    container.appendChild(widget.elem);
}

UI.constructor = {
    'input' : InputWidget
}

var input = new UI('input');

