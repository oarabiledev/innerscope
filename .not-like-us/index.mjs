/**
 * @description
 * Euphoria 
 * : a feeling of well being or elation
 * | Apparently, its the chamge in mood--the
 * | feeling of euphoria and reduced anxiety
 * | that prompts people to start using this 
 * | dangerous drug.
 * | - Rita L. Atikson et al. 
 * |           {{{(>_<)}}} 
 * | Inspired by Kendrick Lamar, my hate 
 * | for HTML & Web FrameWorks.
 * | Further inspired by DroidScript.
 * 
 * @summary An Interface Framework Inspired By Hatred.
 * @license 
 *  Apache License Version 2.0, January 2004
*/

function Euphoria(){
    /**
     * @summary Adds/Loads A Plugin into your app.
     * @param {string} pluginName 
     */
    this.loadPlugin = async (pluginName) => {
        var head = document.getElementsByTagName('head')[0];
    
        var plugin = document.createElement('script');
        plugin.src = './.not-like-us/pluginFolder/' + pluginName + '/main.js';
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
        script.defer = true;

        script.onerror = function (){
            console.info(`ui.loadScript() : Failed`)
        }
        document.head.appendChild(script);

        if (callback){
            script.onload = function (){
                console.info(`ui.loadScript() : ${filePath}`)
                callback()
            }
        }
        else {
            console.info(`ui.loadScript() : ${filePath}`)
        }
    }

    this.loadCSS = function (filepath) {
        let style = document.createElement('link')
        style.type = 'text/stylesheet';
        style.href = filepath;
        style.fetchPriority = 'high'

        document.head.appendChild(style);
    }

    this.addPageRoutes = (pageRoutes) =>{

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
        pageScript.src = `.src/mod/${page}.js`;
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
            let AppContainer = document.getElementById('AppContainer');
            AppContainer.appendChild(layout.element);

            console.info(`addLayout() : ${layout.element}`)
        }

        else {
            console.info(`The Returned Object Is, \nNot An HTMLElement : ${layout.element}`)
        } 
    }
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

    /**
     * Tags the HTML Element With Associated Id or ClassName
     * @param {any} id Element Id
     * @param {any} className Element ClassName
    */
    this.setTagging = (id, className) =>{
        if (designId == 'bds'){
            this.element.id = id;
            this.element.className = className;
        }
        else {
            console.info(`setTagging Method Not Available.`)
        }
    }

    this.element = document.createElement('div');
    this.element.style.width = 100 + '%';
    this.element.style.height = 100 + '%';
    styleElement(this.element, type, options);
        
    return this;
}


const ui = new Euphoria()
let componentId = 0;

function idCount(){
    componentId = componentId + 1;
    return componentId;
}

function _platForm() {
    const userAgent = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) return "mobile";
    else if(/iPad/i.test(userAgent)) return "tablet";
    else return "desktop";
}

const platform = {
    mobile: navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null,
    ios: navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null,
    android: navigator.userAgent.match(/(android)/i) != null,
    macos: navigator.userAgent.match(/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i) != null,
    windows: navigator.userAgent.match(/(Windows NT)|(Win32)|(Win64)|(WOW64)/i) != null,
    type: _platForm()
};

// Finally Import & We Call OnStart
import Application from "../App.js";

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.info(`Euphoria Is Running In :` + platform.type)
        const App = new Application();
        App.OnStart();
    } catch (err) {
        return null;
    }
});

// Add Some Event Listeners To Support Other App Events
document.onvisibilitychange = function () {
    if (document.visibilityState === 'hidden') {
        try {
            const App = new window.Application();
            App.OnPause();
        } catch (err) {
            return null;
        }
    } else {
        try {
            const App = new window.Application();
            App.OnResume();
        } catch (err) {
            return null;
        }
    }
};

function styleElement(layout, type, options) {
    if (type.toLowerCase() == 'linear') {
        layout.style.display = 'flex';
    } else if (type.toLowerCase() === 'card') {
        layout.style.padding = '10px';
        layout.style.borderRadius = '5px';
    } else if (type.toLowerCase() === 'frame') {
        layout.style.position = 'relative';
    } else if (type.toLowerCase() === 'absolute') {
        layout.style.position = 'relative';
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
            layout.style.width = '100%';
        }
        if (options.toLowerCase().includes('filly')) {
            layout.style.height = '100%';
        }
        if (options.toLowerCase().includes('horizontal')) {
            layout.style.flexDirection = 'row';
        }
        if (options.toLowerCase().includes('vertical')) {
            layout.style.flexDirection = 'column';
        }
    }
}

function widthComposer(width) {
    return typeof width === 'number' ? `${width * 100}%` : width;
}

function heightComposer(height) {
    return typeof height === 'number' ? `${height * 100}%` : height;
}

class ElementComposer {
    constructor(parent, width, height, options, objectInfo){
        this.id = idCount();
        
        this.width = width;
        this.height = height;
        this.parent = parent;
        this.objectInfo = objectInfo;

        
        this.options = options;

        // We Then Render The Div & Components
        this.composer = document.createElement('div');
        this.composer.id = this.id;
       
        this.composer.style.width = widthComposer(this.width) ;
        this.composer.style.height = heightComposer(this.height) ; 
        
        this.element = this.composer;

        this.parent.addChild(this)
    }

    /**
     * Sets the size of the control, use option parameter to determine type.
     * @param {number} width 
     * @param {number} height 
     * @param {string} options 
     */
    setSize(width, height, options){
        if(!options){
            this.composer.style.width = widthComposer(width);
            this.composer.style.height = heightComposer(height);
        }
        else {
            this.composer.style.width = width + options;
            this.composer.style.height = height + options;
        }
    }

    /**
     * Transform and Scale Component
     * @param {number} width 
     * @param {number} height 
     */
    setScale(width, height){
        if(width || height){
            this.composer.style.transform = `scale($width, $height)`
        }
        else console.info(`For Transform Scale No Values`);
    }
    /**
     * Add a function to be called on a click event.
     * @param {Function} onClick 
     */
    setOnClick(onClick){
        this.composer.addEventListener('click',()=>{
            onClick()
        })
    }

    /**
     * @param{any} color The color of component in a string or hex.
     */
    set backColor(color){
        this.color = color;
        this.composer.style.backgroundColor = color
    }

    get backColor(){
        return this.color;
    }


}


ui.addButton = (parent, text, width, height, icon, options) =>{
    return new buttonObject(parent, text, width, height, icon, options)
}

const buttonObject = class extends ElementComposer{
    constructor(parent, text, width, height, icon, options){
        super(parent,width, height, options, "Button")
        this.text = text;
        this.icon = icon;
        
        this._create()
    }

    _create(){
        this.element = document.createElement('button');
        
        this.element.style.width = widthComposer(this.width);
        this.element.style.height = heightComposer(this.height);

        this.element.textContent = this.text;
        this.composer.appendChild(this.element)
    }

    
}



export default ui ;
