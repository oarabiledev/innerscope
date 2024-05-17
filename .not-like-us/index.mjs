/**
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
*/

// Import Application Class To Call On DOM Load
import Application from "../App.mjs"

function Euphoria(){

    /**
     * Adds/Loads A Plugin into your app.
     * @param {string} pluginName 
     */
    this.LoadPlugin = (pluginName) =>{

    }

    /**
     * Add or reference a js file. 
     * @param {string} filePath 
     */
    this.LoadScript = (filePath) =>{

    }

    /**
     * Add or reference a js file, with defer option.
     * @param {string} filePath 
     * @param {string} noDefer 
     */
    this.Script = (filePath, noDefer = false)=>{

    }

    /**
     * Creates a ds-Style layout.
     * @param {string} type A layout type, i.e Linear.
     * @param {string} options Options like FillXY.
     */
    this.CreateLayout = (type, options) =>{

    }

    /**
     * Add a ds-Style layout.
     * @param {string} type A layout type or Object
     * @param {string} options ptions like FillXY.
     */
    this.AddLayout = (type, options) =>{

    }

    this.CreateButton = (text, width, height, options) =>{

    }

    this.AddButton = (parent, text, width, height, options) =>{

    }
}

const app = new Euphoria();
const App = new Application();

// Finally We Call OnStart

document.addEventListener('DOMContentLoaded',()=>{
    App.OnStart();
})

// Add Some Event Listeners To Support Other App Events

document.onvisibilitychange = function(){
    if (document.visibilityState === 'hidden'){
        App.OnPause();
    }
    else {
        App.OnResume();
    }
}

export default app;
