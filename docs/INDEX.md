
# ```Getting Started With Euphoria.js```

Euphoria is not a framework but a library that allows you to create intercative
interfaces, it can be compared to jQuery and extensible with plugins.

Euphoria is inspired by my former projects such as squidBASE
The architecture of Euphoria is a minimal js file that provides functions and
classes that can be extended to create ui, and provide a better and easier
solution to React / Vue & Svelte.

Euphoria library is designed to work as fast as possible and reduce the memory usage
in a product.

When extending the ElementComposer class it will allow you to inherit pre- written
methods.

Euphoria works on open-source products to make it much more better, these are :

- Animate.css
- Tween.js

To start download the euphoria.zip file which is a folder of how your code should look like.


And your index.html file in the same directory as your App.js file.

Your html file should look like this:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
    content="width=device-width, initial-scale=1.0" />

    <script src="euphoria.min.js"></script>
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
    <script src="App.js"></script>
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
