# ```Getting Started With InnerScope.js```

InnerScope is not a framework but a library that allows you to create intercative
interfaces, it can be compared to jQuery and extensible with plugins.

InnerScope is inspired by my former projects such as squidBASE
The architecture of InnerScope is a minimal js file that provides functions and
classes that can be extended to create ui, and provide a better and easier
solution to React / Vue & Svelte.

InnerScope library is designed to work as fast as possible and reduce the memory usage
in a product.

When extending the ElementComposer class it will allow you to inherit pre- written
methods.

InnerScope works on open-source products to make it much more better, these are :

- Animate.css
- Tween.js

To get started add your index.html file in the same directory as your App.js file.

Your html file should look like this:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
    content="width=device-width, initial-scale=1.0" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/20.0.0/tween.umd.js"></script>
    
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

- onPause
- onResume

I think i dont have to explain each function as they are self explaining.

## ```Builidng Interfaces With InnerScope.js```

InnerScope.js takes a different approach.

Instead of using the document.createElement() api, we use a custom function called

ui.addElement()

This allows us to extend the ElementComposer class, which means you can then use features like

- setOnTouch
- Animate

**Check ELEMENT.md to see other methods you can use.**

And use document.createElement() methods like

- textContent

This is so because the ui.addElement() will return a proxy allowing us to do this.

The syntax for this function is:

```javascript
ui.addElement(parent, element, width, height, options)
```

> [!NOTE]
> element, is an HTMLELEMENT or even a litty custom element, you
> pass strings like button or img.

A simple example is :

```javascript

class Application {
    onStart () {
        let lay = ui.createLayout("linear", "fillxy,top" )

        let btn = ui.addElement(lay, 'button', 0.2, 0.05, '')

        /* Usage Of Dom Method */

        btn.textContent = 'InnerScope'

        /* Usage Of InnerScope Method */
        btn.setOnTouch(()=>{
            console.log('A simple Demo')
        })
        
        ui.addLayout(lay)
    }
}

```

I advise this is used for single elements and those that get nested a custom component is built, refer to the ELEMENT.md documentation.
