
# `Euphoria Is A Feeling, The Exact Purpose Of This...`

HTML gets nested and XML Tags keep drowning me in and can't find whether i set
'search' as an id or a class.

HTML is great but it gets verbose easily and hard to manage, additionally I dont want to meddle
too much in that framework stuff.
How about we have a simple framework, you build all the components you want and fit them into
the Innerscope.js Syntax ?

I am activley trying to create a framework which doesn't abstract too much at the same time being
as well optimized and easy to use and intergrate with existing projects.

The project is hosted on node and installable as ,

```npm i innerscope```

and as a script tag as

```<script src="https://unpkg.com/innerscope"></script>```

also using another cdn

```<script src="https://cdn.jsdelivr.net/npm/innerscope@0.0.8/innerscope.min.js"></script>```

## A proof of concept

Then create the typical index.html file.

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
    content="width=device-width, initial-scale=1.0" />
    
    <script type="module" src="https://unpkg.com/innerscope.js"></script>
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

<body>
    
</body>

</html>
```

After this, we add our App.js file where all ui is called.

```javascript
import { ui } from './innerscope.js'
class Application {
  onStart () {
     let lay = ui.addLayout('linear','fillXY')

     let btn = ui.addHTMLElement(lay, 'button', 0.02,0.2,'draggable');
     btn.textContent = 'InnerScope JS'
     btn.onTouch(()=>{
        console.log(`A showcase of InnerScope.js`)
     })
     ui.addLayout(lay)
   }
}

export default Application;
```

For more information check the GET_STARTED.md documentation in the docs folder.
Thank You For The Interest ❣️❣️❣️
