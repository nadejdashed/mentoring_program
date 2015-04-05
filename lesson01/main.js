var UI = (function () {
    var constructors = {},
		container = document.getElementById('ui-container');
	
	function UI(){};
	
	UI.prototype.init = function() {
		var elem = document.createElement(this.type);
		elem.className = ['ui-',this.type].join('');
		elem.onfocus = this.onFocus;
		elem.onblur = this.onBlur;
		this.elem = elem;
		this.addToPage();
	};

	UI.prototype.addToPage = function() {
		var parentElem, outerElem;
				
		if (this.options && this.options.parent){
			parentElem = this.options.parent.elem;
			parentElem.appendChild(this.elem);
		} else {
			outerElem = document.createElement('div');
			outerElem.className = ['ui-',this.type,'-widget'].join('');
			outerElem.appendChild(this.elem);
			
			parentElem = document.createElement('div');
			parentElem.className = 'ui-item';
			parentElem.appendChild(outerElem);
			
			container.appendChild(parentElem);			
		}
	};
		
	return {
		add: function(type, constructor){
			if (!constructors[type]){
				var F = function () {},
					proto = constructor.prototype;
				F.prototype = UI.prototype;
				constructor.prototype = new F();
				constructor.prototype.uber = UI.prototype;
				for (var attr in proto) {
					if (proto.hasOwnProperty(attr)){
						constructor.prototype[attr] = proto[attr];
					}
				}
				constructors[type] = constructor;			
			} else {
				throw 'this type is already initialized';
			}
		},
		remove: function(type){
			if (constructors[type]){
				constructors[type] = null;
			} else {
				throw 'this type was not initialized';
			}
		},
		create: function(type, options){
			if (constructors[type]){
				var item = new constructors[type]();
				item.type = type;
				item.options = options;
				item.init();
				return item;
			} else {
				throw 'this type was not initialized';
			}
		}
	};
})();