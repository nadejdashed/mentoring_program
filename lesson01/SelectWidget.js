var SelectWidget = function () {};

var OptionWidget = function () {};
OptionWidget.prototype.init = function(){
	this.uber.init.apply(this);
	if (this.options){	
		name = this.options.name;
		this.elem.innerHTML = name;
		this.elem.value = name;
	}
}

UI.add('select', SelectWidget);
UI.add('option', OptionWidget);

var select = UI.create('select');
UI.create('option', {parent: select, name: 'Option 1'});
UI.create('option', {parent: select});
UI.create('option', {parent: select, name: 'Option 3'});