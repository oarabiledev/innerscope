
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

The infastructure of your app, and class are you should also have more functions.

- onBack
- onPause
- onResume

I think i dont have to explain each function as they are self explaining.
