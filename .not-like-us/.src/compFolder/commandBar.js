
/**
 * Returns a code styled cli
 * @param {object} parent 
 * @param {String} hint 
 * @param {String} options 
 * @param {number} width 
 * @param {number} height 
 */

ui.addCommandBar = function (parent, hint, width, height, options){
    return new ui.CommandBar(parent, hint, width, height, options )
}

ui.CommandBar = class extends ElementComposer {
    constructor(parent, hint, width, height, options){
        super(parent, width, height, options, "Input")
        this.hint = hint
        this._create()
    }
    
    _create() {
        let elem = document.createElement('input');
        elem.placeholder = this.hint;
        elem.style.width = widthComposer(this.width);
        elem.style.height =  heightComposer(this.height);
        elem.className = 'cli-input'
 
        this.composer.appendChild( elem )
    }
}

