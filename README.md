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


## A proof of concept

Then create the typical index.html file.

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
    content="width=device-width, initial-scale=1.0" />

    <script src="https://unpkg.com/innerscope"></script>
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
     ui.addLayout(lay)
   }
}
```

Thank You For The Interest ❣️❣️❣️
