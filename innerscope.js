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
     * @summary Adds/Loads A Plugin into your ui.
     * @param {string} pluginName 
     */
    this.loadPlugin = async () => {
        var head = document.getElementsByTagName('head')[0];
    
        var plugin = document.createElement('script');
        plugin.src = pluginName + '.js';
        plugin.async = false;  // Ensure script is executed in order
        plugin.defer = true;   // Defer execution till after parsing
    
        // Return a promise that resolves when the script is loaded
        await new Promise((resolve, reject) => {
            plugin.onload = function () {
                console.info(`ui.loadPlugin() : ${pluginName}`);
                resolve();
            };
            plugin.onerror = function () {
                reject(new Error(`Failed to load plugin: ${pluginName}`));
            };
            head.appendChild(plugin);
        });
    
    };

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

        let pageScript = document.createElement('script');
        pageScript.src = `${page}.js`;
        pageScript.type = 'module';
        
        pageScript.onload = () => {
            try {
                const App = new window.Application();
                App.OnStart();
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
        return navigator.userAgentData.mobile;
    },

    desktop : () =>{
        if (!navigator.userAgentData.mobile){
            let uaPlatform = navigator.userAgentData.platform ;

            if (uaPlatform == undefined) {

            }
            else return true; 
        }
    },

    type : () =>{

    }
}

const widthComposer = function widthComposer(width) {
    let deviceWidth = window.innerWidth;
    return parseFloat(width * deviceWidth)/ 1 + 'px'; 
}

const heightComposer = function heightComposer(height) {
    let deviceHeight = window.innerHeight;
    return parseFloat(height * deviceHeight)/ 1 + 'px';
}

const pxToDeviceRatio = function pxToDeviceRatio(val, side){
    if (side.toLowerCase() == 'w'){
        return val / window.innerWidth;
    }
    else {
        return val / window.innerHeight;
    }
}

const createSignal = function(defaultVal = null){
    let internalVal = defaultVal;
    let subscription = [];

    function notifier (){
        for (subscriber of subscription){
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


const ElementComposer = class ElementComposer {
    constructor(parent, width, height, options, objectInfo){
        this.id = idCount();
        
        this.width = width;
        this.height = height;
        this.parent = parent;
        this.objectInfo = objectInfo;

        
        this.options = options.toLowerCase();

        // We Then Render The Div & Components
        this.composer = document.createElement('div');
        this.composer.id = this.id;
        

        if (typeof this.width == 'number'){
            if (this.width == -1){
                this.composer.style.width = 'fit-content';
                this.composer.style.height = heightComposer(this.height); 
            }
            else if (this.height == -1){
                this.composer.style.width = widthComposer(this.width);
                this.composer.style.height = 'fit-content'
            }
            else {
                this.composer.style.width = widthComposer(this.width);
                this.composer.style.height = heightComposer(this.height); 
            }
        }

        else {
            this.composer.width = this.width;
            this.composer.height = this.height;
        }
        this.element = this.composer;

        this.parent.addChild(this)
    }

    setAnimation(animation, time, callback){
        if (animation && time && callback){
            this.element.className = `animate__animated animate__${animation} 
            --animate-duration: ${time}s`
            this.element.addEventListener('animationend',callback())
        }

        else if (animation && time){
            this.element.className = `animate__animated animate__${animation} 
            --animate-duration: ${time}s`
        }

        else if (animation && callback){
            this.element.className = `animate__animated animate__${animation}`
            this.element.addEventListener('animationend',callback())
        }

        else {
            this.element.className = `animate__animated animate__${animation}`
        }
    }

    setTween () {

    }

    /**
     * Adds a device specific touch handler.
     * For Mobile onmouseup is used but for
     * desktop onmousedown is used.
     * @param {Function} onTouch 
     */
    setOnTouch(onTouch){
        if (platform.type == 'mobile'){
            this.composer.addEventListener('mouseup',(event) =>{
                onTouch(event)
            })
        }
        else {
            this.composer.addEventListener('mousedown', (event) =>{
                onTouch(event)
            })
        }
    }

    /**
     * Add a function to be called on a click event.
     * @param {Function} onClick 
     */
    setOnClick(onClick){
        this.composer.addEventListener('click',(event)=>{
            onClick(event)
        })
    }

    setOnDblClick(onDblClick){
        this.composer.addEventListener('dblclick',(event)=>{
            onDblClick(event)
        })
    }
    /**
     * Adds OnMouseUp event listener
     * @param {Function} onMouseUp 
     */
    setOnMouseUp(onMouseUp){
        this.composer.addEventListener('mouseup',(event)=>{
            onMouseUp(event)
        })
    }

    /**
     * Adds mousedown event-listener
     * @param {Function} onMouseDown 
     */
    setOnMouseDown(onMouseDown){
        this.composer.addEventListener('mousedown',(event)=>{
            onMouseDown(event)
        })
    }
    /**
     * Adds mouseover listener
     * @param {Function} onMouseOver 
     */
    setOnMouseOver(onMouseOver){
        this.composer.addEventListener('mouseover',(event)=>{
            onMouseOver(event)
        })
    }
    /**
     * Sets the elements position if it lays in an
     * Absolute layout
     * @param {number} left 
     * @param {number} top 
     * @param {number} width 
     * @param {number} height 
     */
    setPosition (left, top, width, height){
        this.composer.style.position = 'absolute'
        
        if (width){
            this.composer.style.left = widthComposer(left - 1/2 * (width))
            this.composer.style.top =  heightComposer(top)

        }
        else {
            this.composer.style.left = widthComposer(left);
            this.composer.style.top = heightComposer(top);
        }
    }

    setMargins (left, top, right, bottom){

    }

    show () {
        this.composer.visibility = 'visible'
    }

    hide () {
        this.composer.visibility = 'hidden'
    }

    gone () {
        this.composer.display = 'none'
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

    this.addChild = function(child) {
        if (child.element instanceof HTMLElement) {
            this.element.appendChild(child.element);
        } else {
            console.error('Not An HTMLElement');
        }
    }

    /**
     * @summary Adds an Animation.
     * @param {string} animation 
     * @param {Function} animEndFunc 
     * @param {number} time 
     */
    this.setAnimation = (animation, animEndFunc, time = 800) =>{

    }

    /**
     * @summary Adds an onClick Event Listener.
     * @param {Function} onTouch
     * @returns Object of touch points. 
     */
    this.setOnTouch = (onTouch) =>{

    }
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
     * @summary Adds an onClick Event Listener.
     * @param {Function} onTouch
     * @returns Object of touch points. 
     */
    this.setOnTouchMove = (onTouchMove) =>{

    }

    this.setBackColor = (color = 'teal') =>{
        this.element.style.backgroundColor = color;
        console.info(`setBackColor() : ${color}`)
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

if(typeof exports != "undefined"){    
    exports.ui = ui;
}
else { ; }

// ===================================== End Of File. ==============================================
