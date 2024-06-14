/**
 * @description 
 * A feeling of well being or elation.
 * Apparently, its the chamge in mood.
 * 
 * The feeling of euphoria and reduced anxiety
 * that prompts people to
 * 
 *  start using this dangerous drug.
 * - Rita L. Atikson et al. 
*/

'use strict'


const ui = new function InnerScope(){

    /**
     * @summary Add or reference a js file. 
     * @param {string} filePath Path
     * @param {Function} callback Function called after loading.
     */
    this.loadScript = (filePath, callback) =>{

        const script = document.createElement('script');
        script.src = filePath;

        script.onerror = function (){
            console.info(`ui.loadScript() : Failed`)
        }
        

        if (callback){
            script.onload = function (){
                console.info(`ui.loadScript() : ${filePath}`)
                callback()
            }
        }
        else {
            console.info(`ui.loadScript() : ${filePath}`)
        }
        document.getElementsByTagName("head")[0].appendChild(script)
    }
    /**
     * Adds a css file to head.
     * @param {string} filepath 
     */
    this.loadCSS = function (filepath) {
        const fileref = document.createElement("link")
        fileref.rel = "stylesheet"
        fileref.type = "text/css"
        fileref.href = filepath
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }

    /**
     * @summary Redirect To Another Page
     * @param {string} page Filename In Mod Folder.
     */
    this.showPage = (page) =>{
        const pageUrl = page;
		window.history.pushState({ path: pageUrl }, '', pageUrl);

        document.body.replaceChildren();
        console.info(`${page} Is loading...`)
        
        let pageScript = document.createElement('script');
        pageScript.src = `${page}.js`;
        
        pageScript.onload = () => {
            try {
                const App = new Page();
                App.onStart();
            } catch (err) {
                console.error(err);
            }
        };

        document.body.appendChild(pageScript)
    }

    /**
     * locks device orient, to specified.
     * @param {*} orient 
     */
    this.setOrientation = (orient) =>{
        ScreenOrientation.lock(orient)
    }

    /**
     * @summary Creates a  layout.
     * @param {string} type A layout type, i.e Linear.
     * @param {string} options Options like FillXY.
     */
    this.createLayout = (type, options) =>{
        return new layoutObject(type, options)
    }

    /**
     * @summary Adds a layout to the screen.
     * @param {string} type A layout type or Object
     */
    this.addLayout = (layout) =>{
        if (layout.element instanceof HTMLElement){
            
            document.body.appendChild(layout.element);

            console.info(`addLayout() : ${layout.element}`)
        }

        else {
            console.info(`The Returned Object Is, \nNot An HTMLElement : ${layout.element}`)
        } 
    }
}

const platform = {
    mobile : () =>{
        return navigator.userAgentData?.mobile || false;
    },

    desktop : () =>{
        return !navigator.userAgentData?.mobile;
    },

    type : () =>{
        return navigator.userAgentData?.mobile ? 'mobile' : 'desktop';
    }
}

/**
 * This function returns point ratio scale to pixel units
 * For Width
 * @param {number} width 
 * @returns number
 */
const widthComposer = function widthComposer(width) {
    let deviceWidth = window.innerWidth;
    return parseFloat(width * deviceWidth)/ 1 + 'px'; 
}

/**
 * This function returns point ratio scale to pixel units
 * For height
 * @param {number} height 
 * @returns number
 */
const heightComposer = function heightComposer(height) {
    let deviceHeight = window.innerHeight;
    return parseFloat(height * deviceHeight)/ 1 + 'px';
}

/**
 * Converts px values to our point based scale.
 * @param {number} val 
 * @param {string} side 
 * @returns number
 */
const pxToDeviceRatio = function pxToDeviceRatio(val, side){
    if (side.toLowerCase() == 'w'){
        return val / window.innerWidth;
    }
    else {
        return val / window.innerHeight;
    }
}

/**
 * Creates a div which adds your element and additional
 * methods to work with.
 * @param {object} parent 
 * @param {number} width 
 * @param {number} height 
 * @param {string} options 
 * @param {string} objectInfo 
 */
const ElementComposer = class ElementComposer {
    constructor(parent, width, height, options = null, object){
        this.id = idCount();
        
        this.width = width;
        this.height = height;
        this.parent = parent;
        this.object = object;
        this.options = options ? options.toLowerCase() : null
        
        // We Then Render The Div & Components

        this.composer = document.createElement('div');
        this.composer.id = this.id;

        /**
         * This series of if checks does this :
         * When height or width is -1 or null the value returned
         * is fit-content
         * If those values are not intergers then eqaute them, thus 
         * allowing you to add width as '1.2rem'
         */

        if (typeof this.width === 'number' || typeof this.width === 'string') {
            if (this.width === -1 || this.width === null) {
                this.composer.style.width = 'fit-content';
            } else if (typeof this.width === 'string') {
                this.composer.style.width = this.width;
            } else {
                this.composer.style.width = widthComposer(this.width);
            }
        } else {
            this.composer.style.width = 'fit-content';
        }
        
        if (typeof this.height === 'number' || typeof this.height === 'string') {
            if (this.height === -1 || this.height === null) {
                this.composer.style.height = 'fit-content';
            } else if (typeof this.height === 'string') {
                this.composer.style.height = this.height;
            } else {
                this.composer.style.height = heightComposer(this.height);
            }
        } else {
            this.composer.style.height = 'fit-content';
        }
        
        // Options Stuff

        if (typeof this.options == 'string'){
            let noOfOptions = this.options.split(',').length;

            // Will loop over options and set em to true
            for (let x = 0 ; x < noOfOptions ; x ++){
                this.element[x] = true;
            }
        }
        else { ; }
        
        this.element = this.composer;
        this.parent.addChild(this);

    }

    /**
     * Add a child element, only use with ui.addElement()
     * @param {*} child 
     */
    addChild(child) {
        if (child instanceof HTMLElement) {
            this.element.appendChild(child);
        } else {
            console.error('Not An HTMLElement');
        }
    }

    /**
     * Binds a signal, and when the value is change
     * your callback is fired.
     * @param {*} signal 
     * @param {*} callback 
     */
    bindSignal(signal, callback){
        signal.subscribe(function(value){
            callback(value);
        })
    }

    /**
     * It destroys the component, and is removed from DOM.
     */
    destroy () {
        this.element.removeEventListener(this.touchEvent, this.onTouch);
        this.element.remove()
    }

    /**
     * Adds a device specific touch handler.
     * For Mobile onmouseup is used but for
     * desktop onmousedown is used.
     * @param {Function} onTouch 
     */
    onTouch(onTouch){
        this.touchEvent = platform.mobile == 'mobile' ? 'mouseup' : 'mousedown';
        this.composer.addEventListener(this.touchEvent, (event) =>{
            onTouch(event)
        })
        this.onTouch = onTouch;
    }
    

    /**
     * If condition is true the element is made visible.
     * @param {boolean} condition 
     */
    showIf (condition){
        this.element.style.display = condition ? 'block' : 'none';
    }

    /**
     * Sets the Element Visibility To Visible
     */
    show () {
        this.element.style.visibility = 'visible'
    }

    /**
     * Sets Element Visibility To Hidden
     */
    hide () {
        this.element.style.visibility = 'hidden'
    }

    /**
     * Hides the element as if it was'nt there.
     */
    gone () {
        this.element.style.display = 'none'
    }

    update (){
        TODO
    }
}

let componentId = 0;

function idCount(){
    componentId = componentId + 1;
    return componentId;
}


function layoutObject(type = 'Linear', options = 'FillXY'){
    console.info(`#${idCount()}`)
    console.info(`createLayout() : ${type},${options}`)
    this.element = null;

    let layout = type;

    /**
     * Adds an HTML Element to the layout.
     * @param {HTMLElement} child 
     */
    this.addChild = function(child) {
        if (child.element instanceof HTMLElement) {
            this.element.appendChild(child.element);
        } else {
            console.error('Not An HTMLElement');
        }
    }

    /**
     * Sets the layout size
     * @param {number} width 
     * @param {number} height 
     * @param {string} options 
     */
    this.setSize = function (width, height, options){
        if(!options){
            this.element.style.width = widthComposer(width);
            this.element.style.height = heightComposer(height);
        }
        else {
            this.element.style.width = width + options;
            this.element.style.height = height + options;
        }
    }

    /**
     * Adds Background Color
     * @param {any} color 
     */
    this.setBackColor = (color = 'teal') =>{
        this.element.style.backgroundColor = color;
        console.info(`setBackColor() : ${color}`)
    }

    /**
     * Applies a shadow to a card layout.
     * @param {*} elevation 
     */
    this.setElevation = (elevation) =>{
        if (layout === 'Absolute'){
            this.element.style.zIndex = elevation * 1000;
        } else {
            console.info('Cannot set elevation to non absolute layout.');
        }
    }
    
    this.getType = () =>{
        return layout;
    }

    this.show = () =>{
        this.element.visibility = 'visible'
    }

    this.hide = () =>{
        this.element.visibility = 'hidden'
    }

    /**
     * It hides the components as if it wasnt there.
     */
    this.gone = () =>{
        this.element.display = 'none'
    }
    
    this.element = document.createElement('div');
    this.element.style.width = widthComposer(1)
    this.element.style.height = heightComposer(1)
    styleElement(this.element, type, options);
        
    return this;
}

document.onvisibilitychange = function () {
    if (document.visibilityState === 'hidden') {
        try {
            const App = new window.Application();
            App.onPause();
        } catch (err) {}
    }
    else {
        try {
            const App = new window.Application();
            App.onResume();
        } catch (err) {}
    }
};

screen.orientation.addEventListener('change',(event)=>{
    try {
        const App = new Application();
        App.onOrient(event)
    }
    catch( err ) { ; }
})

function styleElement(layout, type, options) {
    if (type.toLowerCase() == 'linear') {
        layout.style.display = 'flex';
    } else if (type.toLowerCase() === 'card') {
        layout.style.padding = '10px';
        layout.style.borderRadius = '5px';
    } else if (type.toLowerCase() === 'frame') {
        layout.style.position = 'relative';
    } else if (type.toLowerCase() === 'absolute') {
        layout.style.position = 'absolute';
    } else {
        console.error('Improper layout ' + layout);
    }

    if (options) {
        if (options.toLowerCase().includes('left')) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.toLowerCase().includes('right')) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.toLowerCase().includes('center')) {
            layout.style.justifyContent = 'center';
        }
        if (options.toLowerCase().includes('vcenter')) {
            layout.style.alignItems = 'center';
        }
        if (options.toLowerCase().includes('h/vcenter')) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.toLowerCase().includes('bottom')) {
            layout.style.alignSelf = 'flex-end';
        }
        if (options.toLowerCase().includes('top')) {
            layout.style.alignSelf = 'flex-start';
        }
        if (options.toLowerCase().includes('fillx')) {
            layout.style.width = widthComposer(1);
        }
        if (options.toLowerCase().includes('filly')) {
            layout.style.height = widthComposer(1);
        }
        if (options.toLowerCase().includes('horizontal')) {
            layout.style.flexDirection = 'row';
        }
        if (options.toLowerCase().includes('vertical')) {
            layout.style.flexDirection = 'column';
        }
    }
}

/**
 * It lets you create any htmlElement, and inherit innerscope methods, and
 * use the available js methods to that element.
 * Basically returns document.createElement()
 * @param {object} parent 
 * @param {HTMLElement} element 
 * @param {number} width 
 * @param {number} height 
 * @param {string} options 
 * @returns HTMLELEMENT
 */

ui.createElement = function(parent, element, width, height, options){
    return new htmlElement(parent, element, width, height, options)
}

const htmlElement = class extends ElementComposer{
    constructor(parent, element, width, height, options){
        super(parent, width, height, options, element);

        this.HTMLElement = element;
        
        this.element = document.createElement(this.HTMLElement);

        this.element.style.width = this.width ? widthComposer(this.width) : 'fit-content';
        if (this.height == -1 || null){
            this.element.style.height = 'fit-content' 
        }
        else {
            this.element.style.height = heightComposer(this.height);
        }
        this.composer.appendChild(this.element);

        /**
         * The proxy allows us to call js methods so as
         * the ones of ElementComposer.
         */
        return new Proxy(this, {
            get(target, prop) {
                if (prop in target) {
                    return target[prop];
                } else {
                    return target.element[prop];
                }
            },
            set(target, prop, value) {
                if (prop in target) {
                    target[prop] = value;
                } else {
                    target.element[prop] = value;
                }
                return true;
            }
        });
    }
}


/**
 * Creates a signal.
 * @param {any} defaultVal 
 * @returns Methods For Working With Signals 
 */
const createSignal = function(defaultVal = null){
    let internalVal = defaultVal;
    let subscription = [];

    function notifier (){
        for (let subscriber of subscription){
            subscriber(internalVal)
        }
    }
    return {
        
        set value(value){
            internalVal = value;
            notifier();
        },

        get value(){
            return internalVal;
        },

        /**
         * Subscribe to any changes to your value
         * The new value will be passed into your
         * Function.
         * @param {Function} fn 
         */
        subscribe : function(fn){
            subscription.push(fn)
        },

        /**
         * Unsubscribe, You wont get notified of value changes
         */
        unsubscribe : function(){
            subscription = []
        }
    }
}

/**
 * Creates A State Value, And Returns An Object With
 * Methods To getState, setState and subscribe
 * @param {*} initialState 
 * @returns object
 */
const createState = function(initialState) {
    let state = initialState;
    let listeners = [];

    const getState = () => state;

    const setState = (newState) => {
        state = newState;
        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    return {getState, setState, subscribe};
}

/**
 * Creates a state, and returns an array of functions
 * Works like react
 * @param {*} initialState 
 * @returns array
 */
const useState = function(initialState) {
    let state = initialState;
    let listeners = [];

    const getState = () => state;

    const setState = (newState)=>{
        state = newState;
        listeners.forEach(listener => listener(state))
    }

    const subscribe = (listener) =>{
        listeners.push(listener);
        return () => {
            listener = listeners.filter(l => l !== listener);
        }
    }

    return [getState, setState]
}



/* ===================================== End Of File. ============================================== */
