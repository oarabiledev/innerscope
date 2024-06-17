# ```Getting Started With InnerScope.js```

InnerScope is not a framework but a library that allows you to create intercative
interfaces with less html and just beatiful js, it can be compared to jQuery and extensible with plugins.

The architecture of InnerScope is a minimal js file that provides functions and
classes that can be extended to create ui, and provide a better and easier
solution to React / Vue & Svelte.

InnerScope library is designed to work as fast as possible and reduce the memory usage
in a product.

When extending the ElementComposer class it will allow you to inherit pre- written
methods.

You can also build ui by using the ui.addHTMLElement function, you pass HTMLElements and even custom ones.

To get started add your index.html file in the same directory as your App.js file.

Your html file should look like this:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
    content="width=device-width, initial-scale=1.0" />
    
    <script src="https://unpkg.com/innerscope.js"></script>
    <script src="App.js"></script>
    <style>
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
    </style>
</head>

<body onload="App = new Application();App.onStart();">
    
</body>

</html>
```

HTML Optimization for ESM :

```html
<script type="module" src="innerscope.js"></script>
<script type="module" src="App.js"></script>
```

And with the App.js file in the same directory should have this format.
I force usage of classes as it will run in strict mode, which will help
developers not to make some js pitfalls.

App.js File :

```javascript
class Application {
    onStart () {
        let lay = ui.createLayout('linear')
        lay.setBackColor('green')
        ui.addLayout(lay)
    }
}
```

For ESM:

```javascript
import { ui } from "./innerscope.js"

class Application {
    onStart () {
        let lay = ui.createLayout("linear")
        lay.setBackColor('teal')
        
        ui.addLayout(lay)
    }
}

window.Application = Application;
```

The infastructure of your app, and class are you should also have more functions.

- onPause (Called when user switches tabs)
- onResume (Called when user returns to tab)
- onOrient (Called when orientation Changes)

You can fix the orient by using the `ui.setOrient(orient)` function.
Check MDN Docs on orientation usage on js.

## ```Builidng Interfaces With InnerScope.js```

InnerScope.js takes a different approach.

Instead of using the document.createElement() api, we use a custom function called

ui.addHTMLElement()

This allows us to extend the ElementComposer class, which means you can then use features like

- onTouch
- destroy

**Check ELEMENT.md to see other methods you can use.**

And use document.createElement() methods like

- textContent

This is so because the ui.addHTMLElement() will return a proxy allowing us to do this.

The syntax for this function is:

```javascript
ui.addHTMLElement(parent, element, width, height, options)
```

> [!NOTE]
> Width & Height must be returned in the 0 to 1 scale.
> If you want to set sizes precisely use the
> pxToDeviceRatio(value, side) function.
> the side is either 'w' for width and 'h' for height.

Also take note :

> [!NOTE]
> element, is an HTMLELEMENT or even a custom element, you
> pass strings like button or img.
> the options string allows you to pass element atributes that
> should be set to true i.e :
> draggable,autofocus

A simple example is :

```javascript

class Application {
    onStart () {
        let lay = ui.createLayout("linear", "fillxy,top" )

        let btn = ui.addHTMLElement(lay, 'button', 0.2, 0.05)

        /* Usage Of Dom Method */

        btn.textContent = 'InnerScope'

        /* Usage Of InnerScope Method */
        btn.onTouch(()=>{
            console.log('A simple Demo')
        })
        
        ui.addLayout(lay)
    }
}

```

I advise this is used for single elements and those that get nested a custom component is built, refer to the ELEMENT.md documentation.

## Apart the onStart Function

You can add other functions like :

- onPause
- onResume
- onOrient

The onPause function is fired when the user leaves your application, either switching tabs or minimizing the browser.
The onResume function will get called after that.

The onOrient function is called when the orientation is changed.

To build a new project, download the inxTemplate.zip file from releases tab and get started, good luck coding >3
