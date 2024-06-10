
# `Euphoria Is A Feeling, The Exact Purpose Of This...`

HTML gets nested and XML Tags keep drowning me in and can't find whether i set
'search' as an id or a class.

HTML is great but it gets verbose easily and hard to manage, additionally I dont want to meddle
too much in that framework stuff.
How about we have a simple framework, you build all the components you want and fit them into
the Innerscope.js Syntax ?

I am activley trying to create a framework which doesn't abstract too much at the same time being
as well optimized and easy to use and intergrate with existing projects.

You can use innerscope in the browser and through node,

```npm i innerscope```

and as a script tag as

```<script src="https://unpkg.com/innerscope"></script>```

also using another cdn

```<script src="https://cdn.jsdelivr.net/npm/innerscope@0.0.3/innerscope.min.js"></script>```

## A proof of concept

Then create the typical index.html file.

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

After this, we add our App.js file where all ui is called.

```javascript
class Application {
  onStart () {
     let lay = ui.addLayout('linear','fillXY')

     let btn = ui.addElement(lay, 'button', 0.02,0.2, '');
     btn.textContent = 'InnerScope JS'
     btn.setOnTouch(()=>{
        console.log(`A showcase of InnerScope.js`)
     })
     ui.addLayout(lay)
   }
}
```

However if you are ESM first then do it this way :

You import the esm version of the script.

```https://unpkg.com/innerscope@0.0.4/innerscope.esm.js```

Your Html file should have this structure.

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

    <script type="module" src="innerscope.esm.js"></script>
    <script type="module" src="App.js"></script>
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

<body onload="let App = new Application(); App.onStart();">

</body>

</html>
```

And your App.js file in this format:

```javascript
import { ui } from "./innerscope.js"

class Application {
    onStart () {
        let lay = ui.createLayout("linear", "fillxy,top" )

        let btn = ui.addElement(lay, 'button', 0.2, 0.05, '')
        btn.textContent = 'InnerScope'
        btn.setOnTouch(()=>{
            console.log(`A showcase of InnerScope.js`)
        })
        
        ui.addLayout(lay)
    }
}

window.Application = Application;
```

For more information check the GET_STARTED.md documentation in the docs folder.
Thank You For The Interest ❣️❣️❣️
