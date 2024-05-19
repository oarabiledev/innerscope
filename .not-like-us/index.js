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
    this.loadPlugin = (pluginName) =>{
        const head = document.querySelectorAll('head');

        const plugin = document.createElement('script');
        plugin.src = './pluginFolder/' + pluginName + pluginName + '.js';

        head.appendChild(plugin)
    }

    /**
     * @summary Add or reference a js file. 
     * @param {string} filePath Path
     * @param {Function} callback Function called after loading.
     */
    this.loadScript = (filePath, callback) =>{

        const script = document.createElement('script');
        script.src = filePath;
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

    /**
     * @summary Add or reference a js file, with defer option.
     * @param {string} filePath 
     * @param {string} noDefer 
     */
    this.Script = (filePath, noDefer = false)=>{

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
    console.info(`createLayout() : ${type},${options}`)
    this.element = null;

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

    this.element = document.createElement('div');
    this.element.style.width = 100 + '%';
    this.element.style.height = 100 + '%';

    return this;
}


window.ui = new Euphoria();

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

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.info(`Euphoria Is Running In :` + platform.type)
        const App = new window.Application();
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
