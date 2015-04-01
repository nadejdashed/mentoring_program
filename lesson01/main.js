Singletone = (function() {
    var inst = {};

    return function() {
        if (!inst) inst = this;
        return inst;
    }
})();
